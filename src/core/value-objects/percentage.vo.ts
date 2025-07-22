// Representa uma porcentagem entre 0% e 100%.
export class Percentage {
  private constructor(private readonly value: number) {}

  // fromDecimal(value: number): Percentage
  public static fromDecimal(value: number): Percentage {
    // TODO: validation
    return new Percentage(value);
  }

  // toDecimal(): number
  public toDecimal(): number {
    return this.value;
  }

  // toString(): string
  public toString(): string {
    return `${this.value * 100}%`;
  }
}
