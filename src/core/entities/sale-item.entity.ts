import { UUID } from '../value-objects/uuid.vo';
import { Name } from '../value-objects/name.vo';
import { Money } from '../value-objects/money.vo';
import { Quantity } from '../value-objects/quantity.vo';

// Representa um item (produto ou serviço) dentro de uma venda.
export class SaleItem {
  constructor(
    public readonly id: UUID,
    public readonly name: Name,
    public readonly unitPrice: Money,
    public readonly quantity: Quantity,
    public readonly totalPrice: Money
  ) {}

  // calculateTotal(): Money
  public calculateTotal(): Money {
    // TODO: implementation
    return Money.fromDecimal(0);
  }
}
