import { RegisterUserDTO } from '../../application/dtos/register-user.dto';
import { UserDTO } from '../../application/dtos/user.dto';
import { UserRepository } from '../repositories/user.repository';
import { PasswordHasher } from '../../infrastructure/auth/password-hasher';

// Cria um novo usuário (admin ou vendedor) no sistema.
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher
  ) {}

  public async execute(input: RegisterUserDTO): Promise<UserDTO> {
    // TODO: implementation
    return null as any;
  }
}
