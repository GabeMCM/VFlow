//[graphql schema Root] -> define os tipos Query e Mutation
import { gql } from 'fastify-gql';

export const rootSchema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
