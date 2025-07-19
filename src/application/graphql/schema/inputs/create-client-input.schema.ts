//[graphql input CreateClientInput]
import { gql } from 'fastify-gql';

export const createClientInput = gql`
  input CreateClientInput {
    nome: String!
    cpf: String!
    telefone: String
    status: String
  }
`;
