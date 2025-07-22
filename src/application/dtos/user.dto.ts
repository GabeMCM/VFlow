// Representa os dados públicos de um usuário retornados pela API.
export class UserDTO {
  id: string; // UUID
  name: string;
  email: string;
  role: string;
  createdAt: string; // ISO 8601
}
