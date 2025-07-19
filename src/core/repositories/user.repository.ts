//[interface UserRepository] -> contrato para persistência de usuários
import { User } from '../entities/user.entity';
import { Email } from '../value-objects/email.vo';
import { UUID } from '../value-objects/uuid.vo';

export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: UUID): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  update(user: User): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<User[]>;
}
