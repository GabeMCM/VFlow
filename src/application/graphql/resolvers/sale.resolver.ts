//[resolver SaleResolver]
import { IClientRepository } from '../../../core/repositories/client.repository';
import { ISaleRepository } from '../../../core/repositories/sale.repository';
import { IUserRepository } from '../../../core/repositories/user.repository';
import { CreateSaleUseCase } from '../../../core/use-cases/create-sale.usecase';
import { UUID } from '../../../core/value-objects/uuid.vo';
import { DateRange } from '../../../core/value-objects/date-range.vo';

export const makeSaleResolver = (
  saleRepository: ISaleRepository,
  clientRepository: IClientRepository,
  userRepository: IUserRepository
) => {
  const createSaleUseCase = new CreateSaleUseCase(saleRepository, clientRepository, userRepository);

  return {
    Query: {
      listSales: async (_: any, { range }: { range: DateRange }) => {
        const sales = await saleRepository.listByPeriod(range);
        return sales.map((s) => s.toJSON()); // Supondo um método toJSON
      },
      getSale: async (_: any, { id }: { id: string }) => {
        const sale = await saleRepository.findById(UUID.fromString(id));
        return sale?.toJSON();
      },
      listSalesBySeller: async (_: any, { sellerId }: { sellerId: string }) => {
        const sales = await saleRepository.findBySellerId(UUID.fromString(sellerId));
        return sales.map((s) => s.toJSON());
      },
    },
    Mutation: {
      createSale: async (_: any, { input }: any) => {
        return await createSaleUseCase.execute(input);
      },
    },
  };
};
