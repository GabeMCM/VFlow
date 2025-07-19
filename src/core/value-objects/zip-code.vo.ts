//[class ZipCode] -> representa e valida um CEP
export class ZipCode {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    //[format] -> formata o CEP para XXXXX-XXX
    return this.value.replace(/(\d{5})(\d{3})/, '$1-$2');
  }

  //[method fromString] -> cria uma instância de ZipCode a partir de uma string
  public static fromString(value: string): ZipCode {
    const cleanedZip = value.replace(/\D/g, '');
    //[validate] -> garante que o CEP tem 8 dígitos
    if (cleanedZip.length !== 8) {
      throw new Error('Zip code must have 8 digits.');
    }
    return new ZipCode(cleanedZip);
  }
}
