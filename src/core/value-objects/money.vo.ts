// Representa valores monetários com precisão de centavos. Evita cálculos com floats.
export class Money {
  private constructor(private readonly value: number) {}

  // fromDecimal(value: number): Money
  public static fromDecimal(value: number): Money {
    return new Money(value * 100);
  }

  // toDecimal(): number
  public toDecimal(): number {
    return this.value / 100;
  }

  // add(other: Money): Money
  public add(other: Money): Money {
    return new Money(this.value + other.value);
  }

  // subtract(other: Money): Money
  public subtract(other: Money): Money {
    return new Money(this.value - other.value);
  }
}
