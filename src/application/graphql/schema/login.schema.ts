type Mutation {
  # Realiza login e retorna um token JWT.
  login(credentials: LoginInput!): AuthPayload
}
