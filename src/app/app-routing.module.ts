import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSegtrabComponent } from './components/home-segtrab/home-segtrab.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { ContatoComponent } from './components/contato/contato.component';

const routes: Routes = [
   {path: '', component:  HomeSegtrabComponent},
   {path: 'empresa', component: EmpresaComponent},
   {path: 'colaborador', component: ColaboradoresComponent},
   {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
