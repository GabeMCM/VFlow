//[class UUID] -> representa um identificador único universal (UUIDv4)
import { randomUUID, validate as validateUUID } from 'crypto';

export class UUID {
  private readonly value: string;

  //[constructor] -> privado para forçar o uso de métodos de fábrica
  private constructor(value: string) {
    this.value = value;
  }

  //[method toString] -> retorna o valor do UUID como string
  public toString(): string {
    return this.value;
  }

  //[method equals] -> compara se dois UUIDs são iguais
  public equals(other: UUID): boolean {
    return this.value === other.toString();
  }

  //[method fromString] -> cria uma instância de UUID a partir de uma string válida
  public static fromString(value: string): UUID {
    //[validate] -> garante que o formato do UUID é válido
    if (!validateUUID(value)) {
      throw new Error('Invalid UUID format');
    }
    return new UUID(value);
  }

  //[method create] -> gera um novo UUIDv4
  public static create(): UUID {
    return new UUID(randomUUID());
  }
}
