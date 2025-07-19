//[type AuthPayload] -> dados a serem incluídos no token JWT
export type AuthPayload = {
  userId: string;
  role: string;
};

//[interface IJWTAuthAdapter] -> contrato para geração e validação de tokens JWT
export interface IJWTAuthAdapter {
  generateToken(payload: AuthPayload, expiresIn: number): string;
  validateToken(token: string): AuthPayload | null;
}
