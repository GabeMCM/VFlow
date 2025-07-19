//[class Money] -> representa valores monetários com precisão
export class Money {
  //[value] -> armazena o valor em centavos para evitar problemas com ponto flutuante
  private readonly value: number;

  private constructor(value: number) {
    this.value = value;
  }

  //[method toDecimal] -> retorna o valor como decimal (ex: 10.50)
  public toDecimal(): number {
    return this.value / 100;
  }

  //[method fromDecimal] -> cria uma instância de Money a partir de um valor decimal
  public static fromDecimal(value: number): Money {
    //[validate] -> garante que o valor não é negativo
    if (value < 0) {
      throw new Error('Money value cannot be negative.');
    }
    //[convert] -> converte para centavos e arredonda para garantir que seja inteiro
    const cents = Math.round(value * 100);
    return new Money(cents);
  }

  //[method add] -> soma dois valores monetários
  public add(other: Money): Money {
    return new Money(this.value + other.value);
  }

  //[method subtract] -> subtrai dois valores monetários
  public subtract(other: Money): Money {
    const result = this.value - other.value;
    if (result < 0) {
      throw new Error('Subtraction resulted in a negative money value.');
    }
    return new Money(result);
  }
}
