import { Product } from '../entities/product.entity';
import { UUID } from '../value-objects/uuid.vo';

// Interface para persistência e consulta de produtos.
export interface ProductRepository {
  save(product: Product): Promise<void>;
  findById(id: UUID): Promise<Product | null>;
  update(product: Product): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<Product[]>;
}
