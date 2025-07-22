// Representa um nome completo válido. Impede o uso de nomes vazios ou inválidos no domínio.
export class Name {
  private constructor(private readonly value: string) {}

  // fromString(value: string): Name
  public static fromString(value: string): Name {
    // TODO: validation
    return new Name(value);
  }

  // toString(): string
  public toString(): string {
    return this.value;
  }
}
