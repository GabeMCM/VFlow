//[class Name] -> representa um nome completo válido
export class Name {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }

  //[method fromString] -> cria uma instância de Name a partir de uma string
  public static fromString(value: string): Name {
    //[validate] -> garante que o nome não é vazio e tem pelo menos duas palavras
    if (!value || value.trim().split(' ').length < 2) {
      throw new Error('Name must have at least two words.');
    }
    //[validate] -> garante que não há números
    if (/\d/.test(value)) {
      throw new Error('Name cannot contain numbers.');
    }
    return new Name(value.trim());
  }
}
