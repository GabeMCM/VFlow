import { Client } from '../entities/client.entity';
import { UUID } from '../value-objects/uuid.vo';
import { CPF } from '../value-objects/cpf.vo';
import { ClientFilter } from '../types/client-filter.type';

// Interface para persistência e consulta de clientes.
export interface ClientRepository {
  save(client: Client): Promise<void>;
  findById(id: UUID): Promise<Client | null>;
  findByCPF(cpf: CPF): Promise<Client | null>;
  update(client: Client): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<Client[]>;
  listLeads(): Promise<Client[]>;
  filterBy(criteria: ClientFilter): Promise<Client[]>;
}
