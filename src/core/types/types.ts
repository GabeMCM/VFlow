export type AuthPayload = {
  id: string;
  roles: Role[];
};

export type User = {
  id: string;
  name: string;
  email: string;
  roles: Role[];
};

export enum Role {
  CONSULTOR = 'consultor',
  GERENTE = 'gerente',
}

export type HttpRequest = {
  headers: {
    authorization?: string;
  };
};