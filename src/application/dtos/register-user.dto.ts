// Representa os dados necessários para registrar um novo usuário no sistema.
export class RegisterUserDTO {
  name: string;
  email: string;
  password: string;
  role: string; // ADMIN | VENDEDOR
}
