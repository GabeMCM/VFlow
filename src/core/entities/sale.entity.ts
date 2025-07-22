import { UUID } from '../value-objects/uuid.vo';
import { Client } from './client.entity';
import { User } from './user.entity';
import { SaleItem } from './sale-item.entity';
import { Money } from '../value-objects/money.vo';
import { DateTime } from '../value-objects/date-time.vo';
import { Discount } from '../value-objects/discount.vo';

// Representa uma venda realizada por um vendedor para um cliente.
export class Sale {
  constructor(
    public readonly id: UUID,
    public readonly client: Client,
    public readonly seller: User,
    public readonly items: SaleItem[],
    public totalValue: Money,
    public readonly createdAt: DateTime
  ) {}

  // calculateTotal(): Money
  public calculateTotal(): Money {
    // TODO: implementation
    return Money.fromDecimal(0);
  }

  // addItem(item: SaleItem): void
  public addItem(item: SaleItem): void {
    // TODO: implementation
  }

  // applyDiscount(discount: Discount): void
  public applyDiscount(discount: Discount): void {
    // TODO: implementation
  }
}
