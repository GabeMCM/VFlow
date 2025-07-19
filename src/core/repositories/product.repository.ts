//[interface ProductRepository] -> contrato para persistência de produtos
import { Product } from '../entities/product.entity';
import { UUID } from '../value-objects/uuid.vo';

export interface IProductRepository {
  save(product: Product): Promise<void>;
  findById(id: UUID): Promise<Product | null>;
  update(product: Product): Promise<void>;
  delete(id: UUID): Promise<void>;
  listAll(): Promise<Product[]>;
}
