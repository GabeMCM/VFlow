//[class Sale] -> representa uma venda realizada
import { DateTime } from '../value-objects/date-time.vo';
import { Money } from '../value-objects/money.vo';
import { UUID } from '../value-objects/uuid.vo';
import { Client } from './client.entity';
import { SaleItem } from './sale-item.entity';
import { User } from './user.entity';

export class Sale {
  public readonly id: UUID;
  public readonly client: Client;
  public readonly seller: User;
  public readonly items: SaleItem[];
  public totalValue: Money;
  public readonly createdAt: DateTime;

  constructor(props: {
    id?: UUID;
    client: Client;
    seller: User;
    items: SaleItem[];
    createdAt?: DateTime;
  }) {
    this.id = props.id || UUID.create();
    this.client = props.client;
    this.seller = props.seller;
    this.items = props.items;
    this.createdAt = props.createdAt || DateTime.now();
    this.totalValue = this.calculateTotal();
  }

  //[method calculateTotal] -> calcula o valor total da venda somando os itens
  private calculateTotal(): Money {
    const total = this.items.reduce(
      (sum, item) => sum + item.totalPrice.toDecimal(),
      0
    );
    return Money.fromDecimal(total);
  }

  //[method addItem] -> adiciona um novo item à venda e recalcula o total
  public addItem(item: SaleItem): void {
    this.items.push(item);
    this.totalValue = this.calculateTotal();
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      client: this.client.toJSON(),
      seller: this.seller.toJSON(),
      items: this.items.map((item) => item.toJSON()),
      totalValue: this.totalValue.toDecimal(),
      createdAt: this.createdAt.toISOString(),
    };
  }
}