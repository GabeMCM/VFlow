// Representa uma data sem hora (ex: datas de nascimento).
export class DateOnly {
  private constructor(private readonly value: string) {}

  // fromISO(value: string): DateOnly
  public static fromISO(value: string): DateOnly {
    // TODO: validation
    return new DateOnly(value);
  }

  // toISO(): string
  public toISO(): string {
    return this.value;
  }
}
