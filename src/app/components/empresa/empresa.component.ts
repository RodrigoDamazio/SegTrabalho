import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Empresa } from 'src/app/models/empresa-model';

import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  myimage5: string = 'assets/imagens/rhPortal.png'

  empresaList$ = new Observable<Empresa[]>();
  router: any;

  constructor(public empresaService: EmpresaService){}

  ListarEmpresas() {
    try {
      this.empresaList$ = this.empresaService.getAll();

    } catch (error) {
      console.error('Erro ao obter usuários:', error);
    }
  }



}
