//[class Address] -> representa um endereço completo
import { Name } from './name.vo';
import { ZipCode } from './zip-code.vo';

export class Address {
  public readonly street: Name;
  public readonly number: string;
  public readonly complement: string | null;
  public readonly city: Name;
  public readonly state: string; //[note] -> por simplicidade, usando string. Poderia ser um VO State.
  public readonly zipCode: ZipCode;

  //[constructor] -> recebe os VOs que compõem o endereço
  constructor(props: {
    street: Name;
    number: string;
    city: Name;
    state: string;
    zipCode: ZipCode;
    complement?: string;
  }) {
    //[validate] -> garante que campos obrigatórios não são vazios
    if (!props.number || !props.state) {
      throw new Error('Street, number, city, state, and zip code are required for an address.');
    }
    this.street = props.street;
    this.number = props.number;
    this.city = props.city;
    this.state = props.state;
    this.zipCode = props.zipCode;
    this.complement = props.complement || null;
  }

  public toString(): string {
    const complement = this.complement ? `, ${this.complement}` : '';
    return `${this.street.toString()}, ${this.number}${complement} - ${this.city.toString()}, ${this.state} - ${this.zipCode.toString()}`;
  }
}
