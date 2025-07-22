import { SyncDataDTO } from '../../application/dtos/sync-data.dto';
import { SyncResultDTO } from '../../application/dtos/sync-result.dto';
import { PeerSyncAdapter } from '../../infrastructure/sync/peer-sync.adapter';
import { DriveBackupAdapter } from '../../infrastructure/sync/drive-backup.adapter';
import { ConflictResolver } from '../../infrastructure/sync/conflict-resolver';

// Orquestra a sincronização peer-to-peer e backup no Google Drive.
export class SyncDataUseCase {
  constructor(
    private readonly peerSyncAdapter: PeerSyncAdapter,
    private readonly driveBackupAdapter: DriveBackupAdapter,
    private readonly conflictResolver: ConflictResolver
  ) {}

  public async execute(input: SyncDataDTO): Promise<SyncResultDTO> {
    // TODO: implementation
    return null as any;
  }
}
