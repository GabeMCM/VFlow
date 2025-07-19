//[usecase UpdateSale] -> permite que um ADMIN edite uma venda
import { SaleDTO } from '../../../application/dtos/sale.dto';
import { UpdateSaleDTO } from '../../../application/dtos/update-sale.dto';
import { User } from '../../entities/user.entity';
import { ISaleRepository } from '../../repositories/sale.repository';
import { UUID } from '../../value-objects/uuid.vo';
import { SaleItem } from '../../entities/sale-item.entity';
import { Name } from '../../value-objects/name.vo';
import { Money } from '../../value-objects/money.vo';
import { Quantity } from '../../value-objects/quantity.vo';

export class UpdateSaleUseCase {
  constructor(private readonly saleRepository: ISaleRepository) {}

  async execute(input: UpdateSaleDTO, actor: User): Promise<SaleDTO> {
    //[constraint] -> apenas usuários ADMIN podem editar vendas
    if (!actor.isAdmin()) {
      throw new Error('Only admins can update sales.');
    }

    //[step] -> buscar venda pelo ID
    const saleId = UUID.fromString(input.saleId);
    const sale = await this.saleRepository.findById(saleId);
    if (!sale) {
      throw new Error('Sale not found.');
    }

    //[step] -> aplicar alterações, se houver
    if (input.items) {
      //[logic] -> substitui os itens antigos pelos novos e recalcula
      const newItems = input.items.map(
        (item) =>
          new SaleItem({
            name: Name.fromString(item.name),
            unitPrice: Money.fromDecimal(item.unitPrice),
            quantity: Quantity.fromNumber(item.quantity),
          })
      );
      sale.items.length = 0; // Limpa o array existente
      newItems.forEach((item) => sale.addItem(item)); // Adiciona novos itens e recalcula o total
    }

    //[step] -> persistir atualização
    await this.saleRepository.update(sale);

    //[return] -> retorna o DTO da venda atualizada
    return sale.toJSON();
  }
}
