import { AuthPayload } from '../../core/types/types';

// Responsável pela geração e validação de tokens JWT para autenticação de usuários.
// Usa chave secreta para assinatura e verifica expiração.
export class JWTAuthAdapter {
  // generateToken(payload: AuthPayload, expiresIn: number): string
  public generateToken(payload: AuthPayload, expiresIn: number): string {
    // TODO: implementation
    return '';
  }

  // validateToken(token: string): AuthPayload | null
  public validateToken(token: string): AuthPayload | null {
    // TODO: implementation
    return null;
  }

  // refreshToken(oldToken: string): string
  public refreshToken(oldToken: string): string {
    // TODO: implementation
    return '';
  }
}
