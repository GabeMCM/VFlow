// Representa os dados públicos de um cliente retornados pela API.
export class ClientDTO {
  id: string;
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
  status: string;
  createdAt: string; // ISO 8601
}
