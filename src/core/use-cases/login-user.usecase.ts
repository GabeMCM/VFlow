import { LoginUserDTO } from '../../application/dtos/login-user.dto';
import { AuthTokenDTO } from '../../application/dtos/auth-token.dto';
import { UserRepository } from '../repositories/user.repository';
import { PasswordHasher } from '../../infrastructure/auth/password-hasher';
import { JWTAuthAdapter } from '../../infrastructure/auth/jwt-auth.adapter';

// Autentica um usuário e gera um token JWT para sessão.
export class LoginUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly jwtAuthAdapter: JWTAuthAdapter
  ) {}

  public async execute(input: LoginUserDTO): Promise<AuthTokenDTO> {
    // TODO: implementation
    return null as any;
  }
}
