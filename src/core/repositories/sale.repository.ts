import { Sale } from '../entities/sale.entity';
import { UUID } from '../value-objects/uuid.vo';
import { DateRange } from '../value-objects/date-range.vo';

// Interface para persistência e consulta de vendas.
export interface SaleRepository {
  save(sale: Sale): Promise<void>;
  findById(id: UUID): Promise<Sale | null>;
  findByClientId(clientId: UUID): Promise<Sale[]>;
  findBySellerId(sellerId: UUID): Promise<Sale[]>;
  update(sale: Sale): Promise<void>;
  delete(id: UUID): Promise<void>;
  listByPeriod(range: DateRange): Promise<Sale[]>;
}
