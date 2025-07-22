// Representa e valida endereços de e-mail.
export class Email {
  private constructor(private readonly value: string) {}

  // fromString(value: string): Email
  public static fromString(value: string): Email {
    // TODO: validation
    return new Email(value);
  }

  // toString(): string
  public toString(): string {
    return this.value;
  }
}
