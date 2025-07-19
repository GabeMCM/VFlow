//[dto ClientDTO] -> dados públicos de um cliente
class AddressDTO {
  street!: string;
  number!: string;
  complement!: string;
  city!: string;
  state!: string;
  zipCode!: string;
}

export class ClientDTO {
  id!: string;
  name!: string;
  cpf!: string;
  phoneNumber!: string;
  email!: string;
  address!: AddressDTO;
  status!: string;
  createdAt!: string; // ISO 8601
}
