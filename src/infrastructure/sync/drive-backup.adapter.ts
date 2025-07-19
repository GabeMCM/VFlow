//[type BackupData] -> representa os dados de backup
export type BackupData = {
  data: any;
  timestamp: string;
};

//[interface IDriveBackupAdapter] -> contrato para backup em nuvem
export interface IDriveBackupAdapter {
  uploadBackup(data: BackupData): Promise<void>;
  downloadBackup(): Promise<BackupData | null>;
}
