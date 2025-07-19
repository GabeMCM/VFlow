//[usecase RegisterUser] -> cria um novo usuário no sistema
import { UserDTO } from '../../../application/dtos/user.dto';
import { RegisterUserDTO } from '../../../application/dtos/register-user.dto';
import { User } from '../../entities/user.entity';
import { Role } from '../../enums/role.enum';
import { IUserRepository } from '../../repositories/user.repository';
import { Email } from '../../value-objects/email.vo';
import { Name } from '../../value-objects/name.vo';
import { Password } from '../../value-objects/password.vo';
import { IPasswordHasher } from '../../../infrastructure/auth/password-hasher.ts';

export class RegisterUserUseCase {
  //[dependencies] -> injeta o repositório de usuário e o hasher de senha
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordHasher: IPasswordHasher
  ) {}

  //[method execute] -> executa o caso de uso
  async execute(
    input: RegisterUserDTO,
    actor?: User // [actor] -> usuário que está executando a ação
  ): Promise<UserDTO> {
    //[constraint] -> apenas usuários ADMIN podem registrar outros usuários
    if (!actor || !actor.isAdmin()) {
      throw new Error('Only admins can register new users.');
    }

    //[validation] -> valida se o e-mail já está em uso
    const email = Email.fromString(input.email);
    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email address is already in use.');
    }

    //[validation] -> valida a força da senha
    Password.validatePlain(input.password);

    //[hashing] -> criptografa a senha
    const hashedPassword = await this.passwordHasher.hash(input.password);

    //[creation] -> cria a instância da entidade User
    const user = new User({
      name: Name.fromString(input.name),
      email: email,
      password: Password.fromHash(hashedPassword),
      role: input.role as Role,
    });

    //[persistence] -> salva o novo usuário no repositório
    await this.userRepository.save(user);

    //[return] -> retorna o DTO com os dados do usuário criado
    return {
      id: user.id.toString(),
      name: user.name.toString(),
      email: user.email.toString(),
      role: user.role,
      createdAt: user.createdAt.toISOString(),
    };
  }
}
