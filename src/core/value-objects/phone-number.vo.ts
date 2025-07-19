//[class PhoneNumber] -> representa e valida números de telefone
export class PhoneNumber {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    //[format] -> formata o número para (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
    const ddd = this.value.substring(0, 2);
    const part1 = this.value.substring(2, this.value.length - 4);
    const part2 = this.value.substring(this.value.length - 4);
    return `(${ddd}) ${part1}-${part2}`;
  }

  //[method fromString] -> cria uma instância de PhoneNumber a partir de uma string
  public static fromString(value: string): PhoneNumber {
    const cleanedNumber = value.replace(/\D/g, '');
    //[validate] -> garante que o número tem 10 ou 11 dígitos (com DDD)
    if (cleanedNumber.length < 10 || cleanedNumber.length > 11) {
      throw new Error('Phone number must have 10 or 11 digits including area code.');
    }
    return new PhoneNumber(cleanedNumber);
  }
}
