import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Colaborador } from 'src/app/models/colaborador-model';

import { ColaboradoresService } from 'src/app/services/colaboradores.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent {
  // form
  id = '';
  usuario = '';
  senha = '';
  permissaoId = '';
  idEmpresa = '';
  nome = '';
  rg = '';
  cpf = '';
  endereco = '';
  numeroEndereco = '';
  cidade = '';
  cep = '';

  colabList$ = new Observable<Colaborador[]>();
  myimage: string = "assets/imagens/segtrab4.avif"
  myimageColab: string = 'assets/imagens/segtrab2.jpeg'

  constructor(public colaboradoresService: ColaboradoresService) {}

  GetAllColab() {
    try {
      this.colabList$ = this.colaboradoresService.getAll();
    } catch (error) {
      console.error('Erro ao obter usuários:', error);
    }
  }

  postColab() {
    if (!this.nome || !this.endereco) return;

    if (this.id) {
      this.putColab();
      return;
    }

    this.colaboradoresService
      .post({
        //id: parseInt(this.id),
        usuario: this.usuario,
        senha: this.senha,
        permissaoId: parseInt(this.permissaoId),
        idEmpresa: parseInt(this.idEmpresa),
        nome: this.nome,
        rg: parseInt(this.rg),
        cpf: parseInt(this.cpf),
        endereco: this.endereco,
        numeroEndereco: parseInt(this.numeroEndereco),
        cidade: this.cidade,
        cep: parseInt(this.cep)
      })
      .subscribe(_ => {
        this.GetAllColab();
        this.id = '';
        this.usuario = '';
        this.senha = '';
        this.permissaoId = '';
        this.idEmpresa = '';
        this.nome = '';
        this.rg = '';
        this.cpf = '';
        this.endereco = '';
        this.numeroEndereco = '';
        this.cidade = '';
        this.cep = '';
      });
  }

  putColab() {
    if (!this.nome || !this.endereco) return;

    this.colaboradoresService
      .put({
        id: parseInt(this.id),
        usuario: this.usuario,
        senha: this.senha,
        permissaoId: parseInt(this.permissaoId),
        idEmpresa: parseInt(this.idEmpresa),
        nome: this.nome,
        rg: parseInt(this.rg),
        cpf: parseInt(this.cpf),
        endereco: this.endereco,
        numeroEndereco: parseInt(this.numeroEndereco),
        cidade: this.cidade,
        cep: parseInt(this.cep)
      })
      .subscribe(_ => {this.GetAllColab();
        this.id = '';
        this.usuario = '';
        this.senha = '';
        this.permissaoId = '';
        this.idEmpresa = '';
        this.nome = '';
        this.rg = '';
        this.cpf = '';
        this.endereco = '';
        this.numeroEndereco = '';
        this.cidade = '';
        this.cep = '';
      });
  }

  deleteColab(id: any){
     this.colaboradoresService.delete(id).subscribe(_ => this.GetAllColab());
  }

  preencherCampos(colab: Colaborador){
    this.id! = colab.id!.toString();
    this.usuario = colab.usuario;
    this.senha = colab.senha;
    this.permissaoId = colab.permissaoId.toString();
    this.idEmpresa = colab.idEmpresa.toString();
    this.nome = colab.nome;
    this.rg = colab.rg.toString();
    this.cpf = colab.cpf.toString();
    this.endereco = colab.endereco;
    this.numeroEndereco = colab.numeroEndereco.toString();
    this.cidade = colab.cidade;
    this.cep = colab.cep.toString()
  }
}
