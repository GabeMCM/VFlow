//[usecase CreateSale] -> registra uma nova venda
import { CreateSaleDTO } from '../../../application/dtos/create-sale.dto';
import { SaleDTO } from '../../../application/dtos/sale.dto';
import { Sale } from '../../entities/sale.entity';
import { SaleItem } from '../../entities/sale-item.entity';
import { IClientRepository } from '../../repositories/client.repository';
import { ISaleRepository } from '../../repositories/sale.repository';
import { IUserRepository } from '../../repositories/user.repository';
import { Money } from '../../value-objects/money.vo';
import { Name } from '../../value-objects/name.vo';
import { Quantity } from '../../value-objects/quantity.vo';
import { UUID } from '../../value-objects/uuid.vo';

export class CreateSaleUseCase {
  constructor(
    private readonly saleRepository: ISaleRepository,
    private readonly clientRepository: IClientRepository,
    private readonly userRepository: IUserRepository
  ) {}

  async execute(input: CreateSaleDTO): Promise<SaleDTO> {
    //[validation] -> busca e valida o cliente e o vendedor
    const client = await this.clientRepository.findById(UUID.fromString(input.clientId));
    if (!client) {
      throw new Error('Client not found.');
    }
    const seller = await this.userRepository.findById(UUID.fromString(input.sellerId));
    if (!seller) {
      throw new Error('Seller not found.');
    }

    //[creation] -> cria os itens da venda
    const saleItems = input.items.map(
      (item) =>
        new SaleItem({
          name: Name.fromString(item.name),
          unitPrice: Money.fromDecimal(item.unitPrice),
          quantity: Quantity.fromNumber(item.quantity),
        })
    );

    //[creation] -> cria a entidade Sale
    const sale = new Sale({
      client,
      seller,
      items: saleItems,
    });

    //[persistence] -> salva a venda
    await this.saleRepository.save(sale);

    //[return] -> retorna o DTO da venda criada
    return {
      id: sale.id.toString(),
      clientId: sale.client.id.toString(),
      sellerId: sale.seller.id.toString(),
      items: sale.items.map((item) => ({
        name: item.name.toString(),
        unitPrice: item.unitPrice.toDecimal(),
        quantity: item.quantity.toNumber(),
        totalPrice: item.totalPrice.toDecimal(),
      })),
      totalValue: sale.totalValue.toDecimal(),
      createdAt: sale.createdAt.toISOString(),
    };
  }
}
