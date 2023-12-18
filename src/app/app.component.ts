import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, exhaustMap, filter, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SegTrabalho';

  // aula RXJS
  input = new FormControl<string>('');

  constructor(){
    //valueChanges é um observable que fica emitindo um valor...
    this.input.valueChanges
    .pipe(
      filter(valor => !!valor),
      debounceTime(500),
      // switchMap ignora a requisição antiga e já parte pra proxima
      // switchMap(valorPesquisa => this.buscarPesquisa(valorPesquisa || '')))
      // exhaustMap enquanto ele não termina a requisição ele não busca outra
      exhaustMap(valorPesquisa => this.buscarPesquisa(valorPesquisa || '')))
    .subscribe(valorInput =>{
       console.log(valorInput)
    });
  }
  //O of é uma observable de RXJS
  buscarPesquisa(pesquisa: string){
    //consulta Http Fake
    return of(`Resultado...${pesquisa}`)
    .pipe(
      tap(valor => console.log(`Buscando...${pesquisa}`)),
      delay(3000))
  }
}
