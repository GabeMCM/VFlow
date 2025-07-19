//[interface ClientRepository] -> contrato para persistência de clientes
import { Client } from '../entities/client.entity';
import { CPF } from '../value-objects/cpf.vo';
import { UUID } from '../value-objects/uuid.vo';

//[type ClientFilter] -> critério de filtro para clientes (exemplo)
export type ClientFilter = {
  name?: string;
  status?: string;
};

export interface IClientRepository {
  save(client: Client): Promise<void>;
  findById(id: UUID): Promise<Client | null>;
  findByCPF(cpf: CPF): Promise<Client | null>;
  update(client: Client): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<Client[]>;
  listLeads(): Promise<Client[]>;
  filterBy(criteria: ClientFilter): Promise<Client[]>;
}
