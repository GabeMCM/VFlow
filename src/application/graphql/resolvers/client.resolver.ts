//[resolver ClientResolver]
import { IClientRepository } from '../../../core/repositories/client.repository';
import { RegisterClientUseCase } from '../../../core/use-cases/register-client.usecase';
import { UUID } from '../../../core/value-objects/uuid.vo';

export const makeClientResolver = (clientRepository: IClientRepository) => {
  const registerClientUseCase = new RegisterClientUseCase(clientRepository);

  return {
    Query: {
      listClients: async () => {
        const clients = await clientRepository.listAll();
        return clients.map((c) => c.toJSON()); // Supondo um método toJSON
      },
      getClient: async (_: any, { id }: { id: string }) => {
        const client = await clientRepository.findById(UUID.fromString(id));
        return client?.toJSON();
      },
      listLeads: async () => {
        const leads = await clientRepository.listLeads();
        return leads.map((l) => l.toJSON());
      },
    },
    Mutation: {
      registerClient: async (_: any, { input }: any) => {
        return await registerClientUseCase.execute(input);
      },
    },
  };
};
