//[class CPF] -> representa e valida um CPF
export class CPF {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    //[format] -> retorna o CPF formatado
    return this.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  public getRaw(): string {
    return this.value;
  }

  public equals(other: CPF): boolean {
    return this.value === other.getRaw();
  }

  //[method fromString] -> cria uma instância de CPF a partir de uma string
  public static fromString(value: string): CPF {
    const cleanedCpf = value.replace(/\D/g, '');
    //[validate] -> garante que o CPF tem 11 dígitos
    if (cleanedCpf.length !== 11) {
      throw new Error('CPF must have 11 digits.');
    }
    //[validate] -> descarta CPFs com todos os dígitos iguais
    if (/^(\d)\1+$/.test(cleanedCpf)) {
      throw new Error('Invalid CPF format.');
    }
    //[validate] -> calcula e valida os dígitos verificadores
    if (!this.validateDigits(cleanedCpf)) {
      throw new Error('Invalid CPF verification digit.');
    }
    return new CPF(cleanedCpf);
  }

  //[method validateDigits] -> lógica de validação dos dígitos do CPF
  private static validateDigits(cpf: string): boolean {
    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }
    if (remainder !== parseInt(cpf.substring(10, 11))) {
      return false;
    }

    return true;
  }
}
