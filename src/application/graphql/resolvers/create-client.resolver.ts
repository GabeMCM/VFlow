import { CreateClientUseCase } from '../../../core/use-cases/create-client.usecase';
import { Client } from '../../../core/entities/client.entity';
import { CreateClientInput } from '../inputs/create-client.input';

// Cria um novo cliente.
export class CreateClientResolver {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  public async createClient({ input }: { input: CreateClientInput }): Promise<Client> {
    // TODO: implementation
    return null as any;
  }
}
