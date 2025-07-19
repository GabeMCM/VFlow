//[resolver UserResolver]
import { IUserRepository } from '../../../core/repositories/user.repository';
import { LoginUserUseCase } from '../../../core/use-cases/login-user.usecase';
import { RegisterUserUseCase } from '../../../core/use-cases/register-user.usecase';
import { UUID } from '../../../core/value-objects/uuid.vo';
import { IPasswordHasher } from '../../../infrastructure/auth/password-hasher';
import { IJWTAuthAdapter } from '../../../infrastructure/auth/jwt-auth.adapter';
import { User } from '../../../core/entities/user.entity';

//[factory] -> cria uma instância do resolver com dependências
export const makeUserResolver = (
  userRepository: IUserRepository,
  passwordHasher: IPasswordHasher,
  jwtAdapter: IJWTAuthAdapter
) => {
  const registerUserUseCase = new RegisterUserUseCase(userRepository, passwordHasher);
  const loginUserUseCase = new LoginUserUseCase(userRepository, passwordHasher, jwtAdapter);

  return {
    Query: {
      listUsers: async () => {
        const users = await userRepository.listAll();
        return users.map((user) => user.toJSON()); // Supondo um método toJSON na entidade
      },
      getUser: async (_: any, { id }: { id: string }) => {
        const user = await userRepository.findById(UUID.fromString(id));
        return user?.toJSON();
      },
    },
    Mutation: {
      registerUser: async (_: any, { input }: any, { actor }: { actor: User }) => {
        return await registerUserUseCase.execute(input, actor);
      },
      login: async (_: any, { input }: any) => {
        return await loginUserUseCase.execute(input);
      },
    },
  };
};
