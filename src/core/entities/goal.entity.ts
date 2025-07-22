import { UUID } from '../value-objects/uuid.vo';
import { User } from './user.entity';
import { DateRange } from '../value-objects/date-range.vo';
import { Money } from '../value-objects/money.vo';
import { Percentage } from '../value-objects/percentage.vo';

// Representa uma meta de vendas atribuída a um vendedor em um período.
export class Goal {
  constructor(
    public readonly id: UUID,
    public readonly user: User,
    public readonly period: DateRange,
    public readonly targetValue: Money,
    public achievedValue: Money
  ) {}

  // calculateProgress(): Percentage
  public calculateProgress(): Percentage {
    // TODO: implementation
    return Percentage.fromDecimal(0);
  }
}
