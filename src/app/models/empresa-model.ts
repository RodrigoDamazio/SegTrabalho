import { Colaborador } from "./colaborador-model";

export interface Empresa {
  id: number;
  nome: string;
  colaboradores: Colaborador[];
}



