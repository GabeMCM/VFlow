import { SyncDataUseCase } from '../../../core/use-cases/sync-data.usecase';
import { SyncResponse } from '../types/sync-response.type';
import { SyncDataInput } from '../inputs/sync-data.input';

// Sincroniza dados do cliente com o servidor.
export class SyncDataResolver {
  constructor(private readonly syncDataUseCase: SyncDataUseCase) {}

  public async syncData({ input }: { input: SyncDataInput }): Promise<SyncResponse> {
    // TODO: implementation
    return null as any;
  }
}
