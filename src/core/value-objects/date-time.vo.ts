// Representa uma data e hora completa com timezone.
export class DateTime {
  private constructor(private readonly value: string) {}

  // fromISO(value: string): DateTime
  public static fromISO(value: string): DateTime {
    // TODO: validation
    return new DateTime(value);
  }

  // toISO(): string
  public toISO(): string {
    return this.value;
  }
}
