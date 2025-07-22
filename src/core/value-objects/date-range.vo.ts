import { DateOnly } from './date-only.vo';

// Representa um intervalo de tempo com data inicial e final.
export class DateRange {
  constructor(
    public readonly startDate: DateOnly,
    public readonly endDate: DateOnly
  ) {}

  // durationInDays(): number
  public durationInDays(): number {
    // TODO: implementation
    return 0;
  }

  // overlapsWith(other: DateRange): boolean
  public overlapsWith(other: DateRange): boolean {
    // TODO: implementation
    return false;
  }
}
