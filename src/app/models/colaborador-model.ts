// colaborador.model.ts

//import { Permissao } from './permissao.model';  // Importe a interface de Permissao
//import { Empresa } from './empresa.model';      // Importe a interface de Empresa
//import { ClienteColaborador } from './cliente-colaborador.model';  // Importe a interface de ClienteColaborador

export interface Colaborador {
  id: number;
  usuario: string;
  senha: string;
  permissaoId: number;
  idEmpresa: number;
  nome: string;
  rg: number;
  cpf: number;
  endereco: string;
  numeroEndereco: number;
  cidade: string;
  cep: number;
  //exclusaoLogica: number;

  // Ligação 1 para 1
  // permissao: Permissao;
  // empresa: Empresa;
  // clienteColaboradores: ClienteColaborador[];
}
export type ColabCadastro = Omit<Colaborador, 'id'>
