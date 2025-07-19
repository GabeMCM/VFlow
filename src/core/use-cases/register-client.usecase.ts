//[usecase RegisterClient] -> cadastra um novo cliente ou lead
import { ClientDTO } from '../../../application/dtos/client.dto';
import { RegisterClientDTO } from '../../../application/dtos/register-client.dto';
import { Client } from '../../entities/client.entity';
import { ClientStatus } from '../../enums/client-status.enum';
import { IClientRepository } from '../../repositories/client.repository';
import { Address } from '../../value-objects/address.vo';
import { CPF } from '../../value-objects/cpf.vo';
import { Email } from '../../value-objects/email.vo';
import { Name } from '../../value-objects/name.vo';
import { PhoneNumber } from '../../value-objects/phone-number.vo';
import { ZipCode } from '../../value-objects/zip-code.vo';

export class RegisterClientUseCase {
  constructor(private readonly clientRepository: IClientRepository) {}

  async execute(input: RegisterClientDTO): Promise<ClientDTO> {
    //[validation] -> valida se o CPF já está em uso
    const cpf = CPF.fromString(input.cpf);
    const existingClient = await this.clientRepository.findByCPF(cpf);
    if (existingClient) {
      throw new Error('CPF is already registered.');
    }

    //[creation] -> cria a instância da entidade Client
    const client = new Client({
      name: Name.fromString(input.name),
      cpf: cpf,
      phoneNumber: PhoneNumber.fromString(input.phoneNumber),
      email: Email.fromString(input.email),
      address: new Address({
        street: Name.fromString(input.address.street),
        number: input.address.number,
        complement: input.address.complement,
        city: Name.fromString(input.address.city),
        state: input.address.state,
        zipCode: ZipCode.fromString(input.address.zipCode),
      }),
      status: input.status as ClientStatus,
    });

    //[persistence] -> salva o novo cliente
    await this.clientRepository.save(client);

    //[return] -> retorna o DTO do cliente criado
    return {
      id: client.id.toString(),
      name: client.name.toString(),
      cpf: client.cpf.toString(),
      phoneNumber: client.phoneNumber.toString(),
      email: client.email.toString(),
      address: {
        street: client.address.street.toString(),
        number: client.address.number,
        complement: client.address.complement || '',
        city: client.address.city.toString(),
        state: client.address.state,
        zipCode: client.address.zipCode.toString(),
      },
      status: client.status,
      createdAt: client.createdAt.toISOString(),
    };
  }
}
