import { SearchClientsUseCase } from '../../../core/use-cases/search-clients.usecase';
import { Client } from '../../../core/entities/client.entity';
import { ClientFiltersInput } from '../inputs/client-filters.input';

// Busca clientes com filtros avançados.
export class SearchClientsResolver {
  constructor(private readonly searchClientsUseCase: SearchClientsUseCase) {}

  public async searchClients({ filters }: { filters: ClientFiltersInput }): Promise<Client[]> {
    // TODO: implementation
    return [];
  }
}
