import { GetClientUseCase } from '../../../core/use-cases/get-client.usecase';
import { Client } from '../../../core/entities/client.entity';

// Busca um cliente pelo ID.
export class GetClientResolver {
  constructor(private readonly getClientUseCase: GetClientUseCase) {}

  public async getClient({ id }: { id: string }): Promise<Client | null> {
    // TODO: implementation
    return null;
  }
}
