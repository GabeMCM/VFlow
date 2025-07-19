//[class DateRange] -> representa um intervalo de tempo
import { DateOnly } from './date-only.vo';

export class DateRange {
  public readonly startDate: DateOnly;
  public readonly endDate: DateOnly;

  constructor(props: { startDate: DateOnly; endDate: DateOnly }) {
    //[validate] -> garante que a data final não é anterior à inicial
    if (props.endDate.toISO() < props.startDate.toISO()) {
      throw new Error('End date cannot be earlier than start date.');
    }
    this.startDate = props.startDate;
    this.endDate = props.endDate;
  }

  //[method durationInDays] -> calcula a duração do intervalo em dias
  public durationInDays(): number {
    const start = new Date(this.startDate.toISO());
    const end = new Date(this.endDate.toISO());
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Adiciona 1 para ser inclusivo
  }

  //[method overlapsWith] -> verifica se dois intervalos de data se sobrepõem
  public overlapsWith(other: DateRange): boolean {
    return (
      this.startDate.toISO() <= other.endDate.toISO() &&
      this.endDate.toISO() >= other.startDate.toISO()
    );
  }
}
