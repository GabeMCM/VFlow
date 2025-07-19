//[resolver GoalResolver]
import { IGoalRepository } from '../../../core/repositories/goal.repository';
import { ISaleRepository } from '../../../core/repositories/sale.repository';
import { CalculateGoalUseCase } from '../../../core/use-cases/calculate-goal.usecase';

export const makeGoalResolver = (goalRepository: IGoalRepository, saleRepository: ISaleRepository) => {
  const calculateGoalUseCase = new CalculateGoalUseCase(goalRepository, saleRepository);

  return {
    Query: {
      getGoalProgress: async (_: any, { userId, startDate, endDate }: any) => {
        return await calculateGoalUseCase.execute({ userId, startDate, endDate });
      },
    },
  };
};
