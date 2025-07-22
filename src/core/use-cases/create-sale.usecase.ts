import { CreateSaleDTO } from '../../application/dtos/create-sale.dto';
import { SaleDTO } from '../../application/dtos/sale.dto';
import { SaleRepository } from '../repositories/sale.repository';
import { ProductRepository } from '../repositories/product.repository';
import { ServiceRepository } from '../repositories/service.repository';
import { ClientRepository } from '../repositories/client.repository';

// Registra uma nova venda associando cliente, vendedor e itens vendidos.
export class CreateSaleUseCase {
  constructor(
    private readonly saleRepository: SaleRepository,
    private readonly productRepository: ProductRepository,
    private readonly serviceRepository: ServiceRepository,
    private readonly clientRepository: ClientRepository
  ) {}

  public async execute(input: CreateSaleDTO): Promise<SaleDTO> {
    // TODO: implementation
    return null as any;
  }
}
