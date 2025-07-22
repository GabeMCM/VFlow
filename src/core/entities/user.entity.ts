import { UUID } from '../value-objects/uuid.vo';
import { Name } from '../value-objects/name.vo';
import { Email } from '../value-objects/email.vo';
import { Password } from '../value-objects/password.vo';
import { Role } from '../value-objects/role.vo';
import { DateTime } from '../value-objects/date-time.vo';
import { Client } from './client.entity';
import { Sale } from './sale.entity';

// Representa um usuário do sistema (vendedor ou administrador). 
// Contém credenciais e permissões de acesso.
export class User {
  constructor(
    public readonly id: UUID,
    public readonly name: Name,
    public readonly email: Email,
    public password: Password,
    public readonly role: Role,
    public readonly createdAt: DateTime
  ) {}

  // canViewClient(client: Client): boolean
  public canViewClient(client: Client): boolean {
    // TODO: implementation
    return false;
  }

  // canEditSale(sale: Sale): boolean
  public canEditSale(sale: Sale): boolean {
    // TODO: implementation
    return false;
  }

  // changePassword(newPassword: Password): void
  public changePassword(newPassword: Password): void {
    this.password = newPassword;
  }
}
