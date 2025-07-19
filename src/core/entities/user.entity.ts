//[class User] -> representa um usuário do sistema
import { Role } from '../enums/role.enum';
import { DateTime } from '../value-objects/date-time.vo';
import { Email } from '../value-objects/email.vo';
import { Name } from '../value-objects/name.vo';
import { Password } from '../value-objects/password.vo';
import { UUID } from '../value-objects/uuid.vo';

export class User {
  public readonly id: UUID;
  public readonly name: Name;
  public readonly email: Email;
  public password: Password;
  public readonly role: Role;
  public readonly createdAt: DateTime;

  constructor(props: {
    id?: UUID;
    name: Name;
    email: Email;
    password: Password;
    role: Role;
    createdAt?: DateTime;
  }) {
    this.id = props.id || UUID.create();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.role = props.role;
    this.createdAt = props.createdAt || DateTime.now();
  }

  //[method changePassword] -> altera a senha do usuário
  public changePassword(newPassword: Password): void {
    this.password = newPassword;
  }

  //[method isAdmin] -> verifica se o usuário tem o papel de ADMIN
  public isAdmin(): boolean {
    return this.role === Role.ADMIN;
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
      email: this.email.toString(),
      role: this.role,
      createdAt: this.createdAt.toISOString(),
    };
  }
}