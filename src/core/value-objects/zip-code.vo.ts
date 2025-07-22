// Representa e valida um código postal (CEP) brasileiro.
export class ZipCode {
  private constructor(private readonly value: string) {}

  // fromString(value: string): ZipCode
  public static fromString(value: string): ZipCode {
    // TODO: validation and formatting
    return new ZipCode(value);
  }

  // toString(): string
  public toString(): string {
    return this.value;
  }
}
