import { ColabCadastro } from './../models/colaborador-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colaborador } from '../models/colaborador-model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private ColabUrl = environment.apiColab;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${this.ColabUrl}`)
  }

  delete(id: number){
    return this.http.delete<void>(`${this.ColabUrl}/${id}`)
  }

  post(colab: ColabCadastro){
    return this.http.post<Colaborador>(`${this.ColabUrl}`, colab)
  }

  put(colab: Colaborador){
    return this.http.put<Colaborador>(`${this.ColabUrl}`, colab)
  }

}
