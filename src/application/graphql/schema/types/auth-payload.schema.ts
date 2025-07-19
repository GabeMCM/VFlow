//[graphql type AuthPayload]
import { gql } from 'fastify-gql';

export const authPayloadType = gql`
  type AuthPayload {
    token: String!
    usuarioId: ID!
    role: String!
  }
`;
