import { UpdateClientDTO } from '../../application/dtos/update-client.dto';
import { ClientDTO } from '../../application/dtos/client.dto';
import { ClientRepository } from '../repositories/client.repository';

// Atualiza os dados de um cliente existente.
export class UpdateClientUseCase {
  constructor(private readonly clientRepository: ClientRepository) {}

  public async execute(input: UpdateClientDTO): Promise<ClientDTO> {
    // TODO: implementation
    return null as any;
  }
}
