//[class Goal] -> representa uma meta de vendas
import { DateRange } from '../value-objects/date-range.vo';
import { Money } from '../value-objects/money.vo';
import { Percentage } from '../value-objects/percentage.vo';
import { UUID } from '../value-objects/uuid.vo';
import { User } from './user.entity';

export class Goal {
  public readonly id: UUID;
  public readonly user: User;
  public readonly period: DateRange;
  public readonly targetValue: Money;
  public achievedValue: Money;

  constructor(props: {
    id?: UUID;
    user: User;
    period: DateRange;
    targetValue: Money;
    achievedValue?: Money;
  }) {
    this.id = props.id || UUID.create();
    this.user = props.user;
    this.period = props.period;
    this.targetValue = props.targetValue;
    this.achievedValue = props.achievedValue || Money.fromDecimal(0);
  }

  //[method calculateProgress] -> calcula o progresso da meta
  public calculateProgress(): Percentage {
    const target = this.targetValue.toDecimal();
    if (target === 0) {
      return Percentage.fromDecimal(0);
    }
    const achieved = this.achievedValue.toDecimal();
    const progress = Math.min(achieved / target, 1); // Garante que não passe de 100%
    return Percentage.fromDecimal(progress);
  }

  //[method updateAchievedValue] -> atualiza o valor alcançado
  public updateAchievedValue(newValue: Money): void {
    if (newValue.toDecimal() > this.targetValue.toDecimal()) {
      this.achievedValue = this.targetValue;
    } else {
      this.achievedValue = newValue;
    }
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      user: this.user.toJSON(),
      period: {
        startDate: this.period.startDate.toISO(),
        endDate: this.period.endDate.toISO(),
      },
      targetValue: this.targetValue.toDecimal(),
      achievedValue: this.achievedValue.toDecimal(),
      progress: this.calculateProgress().toDecimal(),
    };
  }
}