// Contém o token JWT retornado após login bem-sucedido.
export class AuthTokenDTO {
  token: string;
  expiresIn: number; // segundos
}
