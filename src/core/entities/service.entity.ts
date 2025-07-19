//[class Service] -> representa um serviço oferecido
import { DateTime } from '../value-objects/date-time.vo';
import { Money } from '../value-objects/money.vo';
import { Name } from '../value-objects/name.vo';
import { Quantity } from '../value-objects/quantity.vo';
import { UUID } from '../value-objects/uuid.vo';

export class Service {
  public readonly id: UUID;
  public readonly name: Name;
  public price: Money;
  public readonly durationInMinutes: Quantity;
  public readonly createdAt: DateTime;

  constructor(props: {
    id?: UUID;
    name: Name;
    price: Money;
    durationInMinutes: Quantity;
    createdAt?: DateTime;
  }) {
    this.id = props.id || UUID.create();
    this.name = props.name;
    this.price = props.price;
    this.durationInMinutes = props.durationInMinutes;
    this.createdAt = props.createdAt || DateTime.now();
  }

  //[method toJSON] -> converte a entidade para um objeto simples
  public toJSON() {
    return {
      id: this.id.toString(),
      name: this.name.toString(),
      price: this.price.toDecimal(),
      durationInMinutes: this.durationInMinutes.toNumber(),
      createdAt: this.createdAt.toISOString(),
    };
  }
}