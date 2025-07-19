//[dto UserDTO] -> dados públicos de um usuário
export class UserDTO {
  id!: string; // UUID
  name!: string;
  email!: string;
  role!: string;
  createdAt!: string; // ISO 8601
}
