// Representa a quantidade de itens, garantindo que seja um número positivo.
export class Quantity {
  private constructor(private readonly value: number) {}

  // fromNumber(value: number): Quantity
  public static fromNumber(value: number): Quantity {
    // TODO: validation
    return new Quantity(value);
  }

  // toNumber(): number
  public toNumber(): number {
    return this.value;
  }
}
