//[interface SaleRepository] -> contrato para persistência de vendas
import { Sale } from '../entities/sale.entity';
import { DateRange } from '../value-objects/date-range.vo';
import { UUID } from '../value-objects/uuid.vo';

export interface ISaleRepository {
  save(sale: Sale): Promise<void>;
  findById(id: UUID): Promise<Sale | null>;
  findByClientId(clientId: UUID): Promise<Sale[]>;
  findBySellerId(sellerId: UUID): Promise<Sale[]>;
  update(sale: Sale): Promise<void>;
  delete(id: UUID): Promise<void>;
  listByPeriod(range: DateRange): Promise<Sale[]>;
}
