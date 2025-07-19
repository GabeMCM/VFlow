//[class SaleItem] -> representa um item dentro de uma venda
import { Money } from '../value-objects/money.vo';
import { Name } from '../value-objects/name.vo';
import { Quantity } from '../value-objects/quantity.vo';
import { UUID } from '../value-objects/uuid.vo';

export class SaleItem {
  public readonly id: UUID;
  public readonly name: Name;
  public readonly unitPrice: Money;
  public readonly quantity: Quantity;
  public readonly totalPrice: Money;

  constructor(props: {
    id?: UUID;
    name: Name;
    unitPrice: Money;
    quantity: Quantity;
  }) {
    this.id = props.id || UUID.create();
    this.name = props.name;
    this.unitPrice = props.unitPrice;
    this.quantity = props.quantity;
    this.totalPrice = this.calculateTotal();
  }

  //[method calculateTotal] -> calcula o valor total do item (preço * quantidade)
  private calculateTotal(): Money {
    const total = this.unitPrice.toDecimal() * this.quantity.toNumber();
    return Money.fromDecimal(total);
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
      unitPrice: this.unitPrice.toDecimal(),
      quantity: this.quantity.toNumber(),
      totalPrice: this.totalPrice.toDecimal(),
    };
  }
}