//[usecase SyncData] -> orquestra a sincronização de dados
import { SyncDataDTO } from '../../../application/dtos/sync-data.dto';
import { SyncResultDTO } from '../../../application/dtos/sync-result.dto';
import { IConflictResolver } from '../../../infrastructure/sync/conflict-resolver.ts';
import { IDriveBackupAdapter } from '../../../infrastructure/sync/drive-backup.adapter.ts';
import { IPeerSyncAdapter } from '../../../infrastructure/sync/peer-sync.adapter.ts';

export class SyncDataUseCase {
  constructor(
    private readonly peerSyncAdapter: IPeerSyncAdapter,
    private readonly driveBackupAdapter: IDriveBackupAdapter,
    private readonly conflictResolver: IConflictResolver
  ) {}

  async execute(input: SyncDataDTO): Promise<SyncResultDTO> {
    //[step] -> conectar ao peer
    await this.peerSyncAdapter.connect();

    //[step] -> receber dados remotos
    const remoteData = await this.peerSyncAdapter.receiveData();
    const localData = { ...input }; // Simplificação

    //[step] -> detectar e resolver conflitos
    const conflicts = this.conflictResolver.detectConflicts(localData, remoteData);
    const resolvedData = this.conflictResolver.resolve(conflicts);

    //[step] -> enviar dados resolvidos
    await this.peerSyncAdapter.sendData(resolvedData);

    //[step] -> fazer backup no drive
    await this.driveBackupAdapter.uploadBackup({
      data: resolvedData,
      timestamp: new Date().toISOString(),
    });

    //[return] -> retorna o resultado da sincronização
    return {
      success: true,
      conflictsResolved: conflicts.length,
      syncedAt: new Date().toISOString(),
    };
  }
}
