//[dto RegisterUserDTO] -> dados para registrar um novo usuário
export class RegisterUserDTO {
  name!: string;
  email!: string;
  password!: string;
  role!: string; // ADMIN | VENDEDOR
}
