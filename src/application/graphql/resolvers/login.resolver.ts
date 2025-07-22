import { LoginUseCase } from '../../../core/use-cases/login.usecase';
import { AuthPayload } from '../../../core/types/types';
import { LoginInput } from '../inputs/login.input';

// Realiza login e retorna um token JWT.
export class LoginResolver {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  public async login({ credentials }: { credentials: LoginInput }): Promise<AuthPayload> {
    // TODO: implementation
    return null as any;
  }
}
