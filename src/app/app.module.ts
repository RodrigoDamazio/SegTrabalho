import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSegtrabComponent } from './components/home-segtrab/home-segtrab.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EmpresaService } from './services/empresa.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSegtrabComponent,
    EmpresaComponent,
    ColaboradoresComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent,
              EmpresaComponent]
})
export class AppModule { }
