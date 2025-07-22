// Interface para hashing e verificação de senhas.
// Implementação recomendada: bcrypt ou argon2.
export interface PasswordHasher {
  // hash(password: string): Promise<string>
  hash(password: string): Promise<string>;

  // verify(password: string, hashed: string): Promise<boolean>
  verify(password: string, hashed: string): Promise<boolean>;
}
