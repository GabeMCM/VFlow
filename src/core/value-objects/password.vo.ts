//[class Password] -> representa uma senha de usuário
//[note] -> esta classe não armazena a senha em texto plano, apenas o hash
export class Password {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public toString(): string {
    return this.value;
  }

  //[method fromHash] -> cria a instância a partir de um hash existente
  public static fromHash(hash: string): Password {
    return new Password(hash);
  }

  //[method fromPlain] -> valida a força de uma senha em texto plano
  //[note] -> o hashing em si deve ser feito por um serviço de infra (PasswordHasher)
  public static validatePlain(plain: string): void {
    //[validate] -> mínimo 8 caracteres, 1 letra, 1 número
    if (plain.length < 8 || !/\d/.test(plain) || !/[a-zA-Z]/.test(plain)) {
      throw new Error(
        'Password must be at least 8 characters long and contain at least one letter and one number.'
      );
    }
  }
}
