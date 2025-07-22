type Query {
  # Busca clientes com filtros avançados.
  searchClients(filters: ClientFiltersInput): [Client]
}
