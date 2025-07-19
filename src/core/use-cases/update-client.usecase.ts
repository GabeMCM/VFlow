//[usecase UpdateClient] -> atualiza os dados de um cliente existente
import { ClientDTO } from '../../../application/dtos/client.dto';
import { IClientRepository } from '../../repositories/client.repository';
import { UUID } from '../../value-objects/uuid.vo';
import { Name } from '../../value-objects/name.vo';
import { PhoneNumber } from '../../value-objects/phone-number.vo';
import { Email } from '../../value-objects/email.vo';
import { Address } from '../../value-objects/address.vo';
import { ZipCode } from '../../value-objects/zip-code.vo';

//[dto UpdateClientDTO] -> DTO para atualização, definido aqui por simplicidade
export class UpdateClientDTO {
  id!: string;
  name?: string;
  phoneNumber?: string;
  email?: string;
  address?: {
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export class UpdateClientUseCase {
  constructor(private readonly clientRepository: IClientRepository) {}

  async execute(input: UpdateClientDTO): Promise<ClientDTO> {
    //[step] -> buscar cliente pelo ID
    const clientId = UUID.fromString(input.id);
    const client = await this.clientRepository.findById(clientId);
    if (!client) {
      throw new Error('Client not found.');
    }

    //[step] -> aplicar alterações permitidas
    if (input.name) {
      client.name = Name.fromString(input.name);
    }
    if (input.phoneNumber) {
      client.phoneNumber = PhoneNumber.fromString(input.phoneNumber);
    }
    if (input.email) {
      client.email = Email.fromString(input.email);
    }
    if (input.address) {
      client.address = new Address({
        street: Name.fromString(input.address.street),
        number: input.address.number,
        complement: input.address.complement,
        city: Name.fromString(input.address.city),
        state: input.address.state,
        zipCode: ZipCode.fromString(input.address.zipCode),
      });
    }

    //[step] -> persistir atualização no repositório
    await this.clientRepository.update(client);

    //[return] -> retorna o DTO do cliente atualizado
    return client.toJSON();
  }
}
