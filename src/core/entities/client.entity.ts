import { UUID } from '../value-objects/uuid.vo';
import { Name } from '../value-objects/name.vo';
import { CPF } from '../value-objects/cpf.vo';
import { PhoneNumber } from '../value-objects/phone-number.vo';
import { Email } from '../value-objects/email.vo';
import { Address } from '../value-objects/address.vo';
import { ClientStatus } from '../value-objects/client-status.vo';
import { DateTime } from '../value-objects/date-time.vo';

// Representa um cliente da loja, podendo estar em estado de lead (potencial cliente).
export class Client {
  constructor(
    public readonly id: UUID,
    public readonly name: Name,
    public readonly cpf: CPF,
    public readonly phoneNumber: PhoneNumber,
    public readonly email: Email,
    public readonly address: Address,
    public status: ClientStatus,
    public readonly createdAt: DateTime
  ) {}

  // isLead(): boolean
  public isLead(): boolean {
    // TODO: implementation
    return false;
  }

  // convertToClient(): void
  public convertToClient(): void {
    // TODO: implementation
  }
}
