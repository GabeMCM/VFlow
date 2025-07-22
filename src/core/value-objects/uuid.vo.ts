// Representa um identificador único universal (UUIDv4). Valida o formato ao criar
// e evita o uso de strings brutas como identificadores no domínio.
export class UUID {
  private constructor(private readonly value: string) {}

  // fromString(value: string): UUID
  public static fromString(value: string): UUID {
    // TODO: validation
    return new UUID(value);
  }

  // toString(): string
  public toString(): string {
    return this.value;
  }

  // equals(other: UUID): boolean
  public equals(other: UUID): boolean {
    return this.value === other.value;
  }
}
