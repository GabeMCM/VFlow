import { RegisterSaleUseCase } from '../../../core/use-cases/register-sale.usecase';
import { Sale } from '../../../core/entities/sale.entity';
import { RegisterSaleInput } from '../inputs/register-sale.input';

// Registra uma venda associada a um cliente.
export class RegisterSaleResolver {
  constructor(private readonly registerSaleUseCase: RegisterSaleUseCase) {}

  public async registerSale({ input }: { input: RegisterSaleInput }): Promise<Sale> {
    // TODO: implementation
    return null as any;
  }
}
