//[class AuthGuard] -> middleware para proteger rotas
import { User } from '../../core/entities/user.entity';
import { IJWTAuthAdapter } from './jwt-auth.adapter';

//[type HttpRequest] -> representação simplificada de uma requisição HTTP
type HttpRequest = {
  headers: {
    authorization?: string;
  };
};

export class AuthGuard {
  constructor(private readonly jwtAdapter: IJWTAuthAdapter) {}

  //[method canActivate] -> verifica se a requisição pode prosseguir
  public canActivate(request: HttpRequest): boolean {
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      return false;
    }
    try {
      const payload = this.jwtAdapter.validateToken(token);
      return !!payload; // Retorna true se o payload for válido
    } catch (error) {
      return false;
    }
  }

  //[method getUserFromToken] -> extrai os dados do usuário a partir do token
  //[note] -> na prática, isso buscaria o usuário completo no banco
  public getUserFromToken(token: string): Partial<User> | null {
    try {
      const payload = this.jwtAdapter.validateToken(token);
      if (!payload) return null;
      return {
        id: { toString: () => payload.userId } as any,
        role: payload.role as any,
      };
    } catch (error) {
      return null;
    }
  }

  private extractTokenFromHeader(request: HttpRequest): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
