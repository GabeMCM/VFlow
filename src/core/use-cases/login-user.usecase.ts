//[usecase LoginUser] -> autentica um usuário e gera um token JWT
import { AuthTokenDTO } from '../../../application/dtos/auth-token.dto';
import { LoginUserDTO } from '../../../application/dtos/login-user.dto';
import { IJWTAuthAdapter } from '../../../infrastructure/auth/jwt-auth.adapter.ts';
import { IPasswordHasher } from '../../../infrastructure/auth/password-hasher.ts';
import { IUserRepository } from '../../repositories/user.repository';
import { Email } from '../../value-objects/email.vo';

export class LoginUserUseCase {
  //[dependencies] -> injeta dependências necessárias para o login
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly passwordHasher: IPasswordHasher,
    private readonly jwtAuthAdapter: IJWTAuthAdapter
  ) {}

  //[method execute] -> executa o caso de uso de login
  async execute(input: LoginUserDTO): Promise<AuthTokenDTO> {
    const email = Email.fromString(input.email);

    //[step] -> busca usuário pelo e-mail
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials.');
    }

    //[step] -> verifica a senha
    const isPasswordValid = await this.passwordHasher.verify(
      input.password,
      user.password.toString()
    );
    if (!isPasswordValid) {
      throw new Error('Invalid credentials.');
    }

    //[step] -> gera o token JWT
    const expiresIn = 3600; // 1 hora
    const token = this.jwtAuthAdapter.generateToken(
      { userId: user.id.toString(), role: user.role },
      expiresIn
    );

    //[return] -> retorna o token e o tempo de expiração
    return {
      token,
      expiresIn,
    };
  }
}
