//[interface IPasswordHasher] -> contrato para hashing e verificação de senhas
export interface IPasswordHasher {
  hash(password: string): Promise<string>;
  verify(password: string, hashed: string): Promise<boolean>;
}
