//[graphql type Client]
import { gql } from 'fastify-gql';

export const clientType = gql`
  type Client {
    id: ID!
    nome: String!
    cpf: String!
    telefone: String
    status: String
    dataCadastro: String
  }
`;
