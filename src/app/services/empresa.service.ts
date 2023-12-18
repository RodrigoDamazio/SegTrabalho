import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa-model';



@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private EmpresaUrl = environment.apiEmpresa;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.EmpresaUrl}`)
  }
}
