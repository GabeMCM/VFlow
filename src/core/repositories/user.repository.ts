import { User } from '../entities/user.entity';
import { UUID } from '../value-objects/uuid.vo';
import { Email } from '../value-objects/email.vo';

// Interface para persistência e consulta de usuários no sistema.
export interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: UUID): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  update(user: User): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<User[]>;
}
