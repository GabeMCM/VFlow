//[class Percentage] -> representa uma porcentagem entre 0 e 100
export class Percentage {
  private readonly value: number; // Armazena como decimal (ex: 0.5 para 50%)

  private constructor(value: number) {
    this.value = value;
  }

  public toDecimal(): number {
    return this.value;
  }

  public toString(): string {
    return `${(this.value * 100).toFixed(2)}%`;
  }

  //[method fromDecimal] -> cria uma instância a partir de um decimal (0 a 1)
  public static fromDecimal(value: number): Percentage {
    //[validate] -> garante que o valor está entre 0 e 1
    if (value < 0 || value > 1) {
      throw new Error('Percentage value must be between 0 and 1.');
    }
    return new Percentage(value);
  }
}
