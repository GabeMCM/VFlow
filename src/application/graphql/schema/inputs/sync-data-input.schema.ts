//[graphql input SyncDataInput]
import { gql } from 'fastify-gql';

export const syncDataInput = gql`
  input SyncDataInput {
    clientes: [ClientInput]!
    vendas: [SaleInput]!
  }

  input ClientInput {
    id: ID
    nome: String
    cpf: String
  }

  input SaleInput {
    id: ID
    clienteId: ID
    valorTotal: Float
  }
`;
