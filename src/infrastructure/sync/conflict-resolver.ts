//[type Conflict] -> representa um conflito de dados
export type Conflict = {
  local: any;
  remote: any;
  type: string;
};

//[interface IConflictResolver] -> contrato para resolução de conflitos
export interface IConflictResolver {
  detectConflicts(localData: any, remoteData: any): Conflict[];
  resolve(conflicts: Conflict[]): any; // Retorna os dados resolvidos
}
