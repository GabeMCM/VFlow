//[interface ServiceRepository] -> contrato para persistência de serviços
import { Service } from '../entities/service.entity';
import { UUID } from '../value-objects/uuid.vo';

export interface IServiceRepository {
  save(service: Service): Promise<void>;
  findById(id: UUID): Promise<Service | null>;
  update(service: Service): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<Service[]>;
}
