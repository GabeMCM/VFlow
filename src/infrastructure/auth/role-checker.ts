//[class RoleChecker] -> utilitário para verificar permissões
import { User } from '../../core/entities/user.entity';
import { Role } from '../../core/enums/role.enum';

export class RoleChecker {
  //[method hasRole] -> verifica se o usuário possui o papel especificado
  public hasRole(user: User, role: Role): boolean {
    return user.role === role;
  }

  //[method isAdmin] -> atalho para verificar se é admin
  public isAdmin(user: User): boolean {
    return this.hasRole(user, Role.ADMIN);
  }
}
