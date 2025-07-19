//[graphql input ClientFiltersInput]
import { gql } from 'fastify-gql';

export const clientFiltersInput = gql`
  input ClientFiltersInput {
    nome: String
    cpf: String
    status: String
    dataCadastroInicio: String
    dataCadastroFim: String
  }
`;
