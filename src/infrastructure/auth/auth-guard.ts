import { User, HttpRequest } from '../../core/types/types';

// Middleware para proteger rotas, validando tokens JWT e permissões.
export class AuthGuard {
  // canActivate(request: HttpRequest): boolean
  public canActivate(request: HttpRequest): boolean {
    // TODO: implementation
    return false;
  }

  // getUserFromToken(token: string): User | null
  public getUserFromToken(token: string): User | null {
    // TODO: implementation
    return null;
  }
}
