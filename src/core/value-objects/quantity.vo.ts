//[class Quantity] -> representa a quantidade de itens
export class Quantity {
  private readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  public toNumber(): number {
    return this.value;
  }

  //[method fromNumber] -> cria uma instância de Quantity a partir de um número
  public static fromNumber(value: number): Quantity {
    //[validate] -> garante que a quantidade é um inteiro e maior ou igual a 1
    if (!Number.isInteger(value) || value < 1) {
      throw new Error('Quantity must be an integer greater than or equal to 1.');
    }
    return new Quantity(value);
  }
}
