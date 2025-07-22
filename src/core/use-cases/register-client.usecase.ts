import { RegisterClientDTO } from '../../application/dtos/register-client.dto';
import { ClientDTO } from '../../application/dtos/client.dto';
import { ClientRepository } from '../repositories/client.repository';

// Cadastra um novo cliente ou lead no sistema.
export class RegisterClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  public async execute(input: RegisterClientDTO): Promise<ClientDTO> {
    // TODO: implementation
    return null as any;
  }
}
