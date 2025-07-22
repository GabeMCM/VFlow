import { CalculateGoalDTO } from '../../application/dtos/calculate-goal.dto';
import { GoalProgressDTO } from '../../application/dtos/goal-progress.dto';
import { GoalRepository } from '../repositories/goal.repository';
import { SaleRepository } from '../repositories/sale.repository';

// Calcula o progresso de uma meta de vendas para um usuário no período definido.
export class CalculateGoalUseCase {
  constructor(
    private readonly goalRepository: GoalRepository,
    private readonly saleRepository: SaleRepository
  ) {}

  public async execute(input: CalculateGoalDTO): Promise<GoalProgressDTO> {
    // TODO: implementation
    return null as any;
  }
}
