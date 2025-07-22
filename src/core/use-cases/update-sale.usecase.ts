import { UpdateSaleDTO } from '../../application/dtos/update-sale.dto';
import { SaleDTO } from '../../application/dtos/sale.dto';
import { SaleRepository } from '../repositories/sale.repository';

// Permite que um ADMIN edite uma venda já registrada.
export class UpdateSaleUseCase {
  constructor(private readonly saleRepository: SaleRepository) {}

  public async execute(input: UpdateSaleDTO): Promise<SaleDTO> {
    // TODO: implementation
    return null as any;
  }
}
