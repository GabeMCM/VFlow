//[class Client] -> representa um cliente da loja
import { ClientStatus } from '../enums/client-status.enum';
import { Address } from '../value-objects/address.vo';
import { CPF } from '../value-objects/cpf.vo';
import { DateTime } from '../value-objects/date-time.vo';
import { Email } from '../value-objects/email.vo';
import { Name } from '../value-objects/name.vo';
import { PhoneNumber } from '../value-objects/phone-number.vo';
import { UUID } from '../value-objects/uuid.vo';

export class Client {
  public readonly id: UUID;
  public readonly name: Name;
  public readonly cpf: CPF;
  public readonly phoneNumber: PhoneNumber;
  public readonly email: Email;
  public readonly address: Address;
  public status: ClientStatus;
  public readonly createdAt: DateTime;

  constructor(props: {
    id?: UUID;
    name: Name;
    cpf: CPF;
    phoneNumber: PhoneNumber;
    email: Email;
    address: Address;
    status: ClientStatus;
    createdAt?: DateTime;
  }) {
    this.id = props.id || UUID.create();
    this.name = props.name;
    this.cpf = props.cpf;
    this.phoneNumber = props.phoneNumber;
    this.email = props.email;
    this.address = props.address;
    this.status = props.status;
    this.createdAt = props.createdAt || DateTime.now();
  }

  //[method isLead] -> verifica se o cliente está no estado de lead
  public isLead(): boolean {
    return this.status === ClientStatus.LEAD;
  }

  //[method convertToClient] -> promove um lead a cliente
  public convertToClient(): void {
    if (this.isLead()) {
      this.status = ClientStatus.CLIENT;
    } else {
      throw new Error('Cannot convert. The person is already a client.');
    }
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
      cpf: this.cpf.toString(),
      phoneNumber: this.phoneNumber.toString(),
      email: this.email.toString(),
      address: {
        street: this.address.street.toString(),
        number: this.address.number,
        complement: this.address.complement,
        city: this.address.city.toString(),
        state: this.address.state,
        zipCode: this.address.zipCode.toString(),
      },
      status: this.status,
      createdAt: this.createdAt.toISOString(),
    };
  }
}