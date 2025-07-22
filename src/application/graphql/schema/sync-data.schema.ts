type Mutation {
  # Sincroniza dados do cliente com o servidor.
  syncData(input: SyncDataInput!): SyncResponse
}
