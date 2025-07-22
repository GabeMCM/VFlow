// Representa e valida um CPF (Cadastro de Pessoa Física). Garante formato correto
// e previne duplicidade no domínio.
export class CPF {
  private constructor(private readonly value: string) {}

  // fromString(value: string): CPF
  public static fromString(value: string): CPF {
    // TODO: validation and formatting
    return new CPF(value);
  }

  // toString(): string
  public toString(): string {
    return this.value;
  }

  // equals(other: CPF): boolean
  public equals(other: CPF): boolean {
    return this.value === other.value;
  }
}
