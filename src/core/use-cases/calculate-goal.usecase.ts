//[usecase CalculateGoal] -> calcula o progresso de uma meta de vendas
import { CalculateGoalDTO } from '../../../application/dtos/calculate-goal.dto';
import { GoalProgressDTO } from '../../../application/dtos/goal-progress.dto';
import { IGoalRepository } from '../../repositories/goal.repository';
import { ISaleRepository } from '../../repositories/sale.repository';
import { DateOnly } from '../../value-objects/date-only.vo';
import { DateRange } from '../../value-objects/date-range.vo';
import { Money } from '../../value-objects/money.vo';
import { UUID } from '../../value-objects/uuid.vo';

export class CalculateGoalUseCase {
  constructor(
    private readonly goalRepository: IGoalRepository,
    private readonly saleRepository: ISaleRepository
  ) {}

  async execute(input: CalculateGoalDTO): Promise<GoalProgressDTO> {
    const userId = UUID.fromString(input.userId);

    //[validation] -> busca as metas do usuário
    const goals = await this.goalRepository.findByUserId(userId);
    const period = new DateRange({
      startDate: DateOnly.fromISO(input.startDate),
      endDate: DateOnly.fromISO(input.endDate),
    });

    //[logic] -> encontra a meta para o período solicitado
    const currentGoal = goals.find((g) => g.period.overlapsWith(period));
    if (!currentGoal) {
      throw new Error('No goal found for the specified period.');
    }

    //[logic] -> busca todas as vendas do usuário no período da meta
    const sales = await this.saleRepository.listByPeriod(currentGoal.period);
    const achievedValue = sales.reduce(
      (sum, sale) => sum + sale.totalValue.toDecimal(),
      0
    );

    //[update] -> atualiza o valor alcançado na meta
    currentGoal.updateAchievedValue(Money.fromDecimal(achievedValue));
    await this.goalRepository.update(currentGoal);

    //[calculation] -> calcula o progresso
    const progress = currentGoal.calculateProgress();

    //[return] -> retorna o DTO com o progresso
    return {
      targetValue: currentGoal.targetValue.toDecimal(),
      achievedValue: currentGoal.achievedValue.toDecimal(),
      progress: progress.toDecimal() * 100,
    };
  }
}
