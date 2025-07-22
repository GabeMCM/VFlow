// Representa e valida números de telefone com DDD. Formata o número ao criar.
export class PhoneNumber {
  private constructor(private readonly value: string) {}

  // fromString(value: string): PhoneNumber
  public static fromString(value: string): PhoneNumber {
    // TODO: validation and formatting
    return new PhoneNumber(value);
  }

  // toString(): string
  public toString(): string {
    return this.value;
  }
}
