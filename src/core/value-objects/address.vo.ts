import { Name } from './name.vo';
import { State } from './state.vo';
import { ZipCode } from './zip-code.vo';

// Representa um endereço completo, incluindo rua, número, complemento, cidade, estado e CEP.
export class Address {
  constructor(
    public readonly street: Name,
    public readonly number: string,
    public readonly complement: string,
    public readonly city: Name,
    public readonly state: State,
    public readonly zipCode: ZipCode
  ) {}

  // toString(): string
  public toString(): string {
    return `${this.street.toString()}, ${this.number}, ${this.complement}, ${this.city.toString()}, ${this.state.toString()} - ${this.zipCode.toString()}`;
  }
}
