import { BackupData, BackupMetadata } from '../../core/types/backup.type';

// Gerencia o backup automático dos dados sincronizados para o Google Drive,
// garantindo persistência externa e recuperação em caso de falhas locais.
export interface DriveBackupAdapter {
  uploadBackup(data: BackupData): Promise<void>;
  downloadBackup(): Promise<BackupData>;
  listBackups(): Promise<BackupMetadata[]>;
  deleteBackup(id: string): Promise<void>;
  onBackupCompleted(callback: () => void): void;
}
