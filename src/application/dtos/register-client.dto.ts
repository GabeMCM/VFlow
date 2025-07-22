// Representa os dados para registrar um novo cliente ou lead.
export class RegisterClientDTO {
  name: string;
  cpf: string;
  phoneNumber: string;
  email: string;
  address: {
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    zipCode: string;
  };
  status: string; // LEAD | CLIENT
}
