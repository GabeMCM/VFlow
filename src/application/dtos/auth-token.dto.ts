//[dto AuthTokenDTO] -> token JWT retornado no login
export class AuthTokenDTO {
  token!: string;
  expiresIn!: number; // segundos
}
