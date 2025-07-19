//[class Product] -> representa um produto físico para venda
import { DateTime } from '../value-objects/date-time.vo';
import { Money } from '../value-objects/money.vo';
import { Name } from '../value-objects/name.vo';
import { Quantity } from '../value-objects/quantity.vo';
import { UUID } from '../value-objects/uuid.vo';

export class Product {
  public readonly id: UUID;
  public readonly name: Name;
  public price: Money;
  public stockQuantity: Quantity;
  public readonly createdAt: DateTime;

  constructor(props: {
    id?: UUID;
    name: Name;
    price: Money;
    stockQuantity: Quantity;
    createdAt?: DateTime;
  }) {
    this.id = props.id || UUID.create();
    this.name = props.name;
    this.price = props.price;
    this.stockQuantity = props.stockQuantity;
    this.createdAt = props.createdAt || DateTime.now();
  }

  //[method decreaseStock] -> diminui a quantidade em estoque
  public decreaseStock(quantity: Quantity): void {
    const newStock = this.stockQuantity.toNumber() - quantity.toNumber();
    if (newStock < 0) {
      throw new Error('Not enough stock available.');
    }
    this.stockQuantity = Quantity.fromNumber(newStock);
  }

  //[method increaseStock] -> aumenta a quantidade em estoque
  public increaseStock(quantity: Quantity): void {
    const newStock = this.stockQuantity.toNumber() + quantity.toNumber();
    this.stockQuantity = Quantity.fromNumber(newStock);
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
      price: this.price.toDecimal(),
      stockQuantity: this.stockQuantity.toNumber(),
      createdAt: this.createdAt.toISOString(),
    };
  }
}