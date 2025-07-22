import { UUID } from '../value-objects/uuid.vo';
import { Name } from '../value-objects/name.vo';
import { Money } from '../value-objects/money.vo';
import { Quantity } from '../value-objects/quantity.vo';
import { DateTime } from '../value-objects/date-time.vo';

// Representa um produto físico disponível para venda.
export class Product {
  constructor(
    public readonly id: UUID,
    public readonly name: Name,
    public readonly price: Money,
    public stockQuantity: Quantity,
    public readonly createdAt: DateTime
  ) {}

  // decreaseStock(quantity: Quantity): void
  public decreaseStock(quantity: Quantity): void {
    // TODO: implementation
  }

  // increaseStock(quantity: Quantity): void
  public increaseStock(quantity: Quantity): void {
    // TODO: implementation
  }
}
