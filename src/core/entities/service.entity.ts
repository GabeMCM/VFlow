import { UUID } from '../value-objects/uuid.vo';
import { Name } from '../value-objects/name.vo';
import { Money } from '../value-objects/money.vo';
import { Quantity } from '../value-objects/quantity.vo';
import { DateTime } from '../value-objects/date-time.vo';

// Representa um serviço oferecido pela loja.
export class Service {
  constructor(
    public readonly id: UUID,
    public readonly name: Name,
    public readonly price: Money,
    public readonly durationInMinutes: Quantity,
    public readonly createdAt: DateTime
  ) {}
}
