//[dto RegisterClientDTO] -> dados para registrar um novo cliente
class AddressDTO {
  street!: string;
  number!: string;
  complement!: string;
  city!: string;
  state!: string;
  zipCode!: string;
}

export class RegisterClientDTO {
  name!: string;
  cpf!: string;
  phoneNumber!: string;
  email!: string;
  address!: AddressDTO;
  status!: string; // LEAD | CLIENT
}
