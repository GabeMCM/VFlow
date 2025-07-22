import { SyncData } from '../../core/types/sync-data.type';

// Responsável pela sincronização em tempo real entre as máquinas na mesma rede local.
// Usa protocolos P2P para compartilhar dados, detectar conflitos e garantir consistência.
export interface PeerSyncAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendData(data: SyncData): Promise<void>;
  receiveData(): Promise<SyncData>;
  resolveConflicts(localData: SyncData, remoteData: SyncData): SyncData;
  onDataReceived(callback: (data: SyncData) => void): void;
}
