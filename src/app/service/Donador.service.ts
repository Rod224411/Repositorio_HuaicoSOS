import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Donador } from '../model/Donador';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DonadorService {
private url=`${base_url}/Donadores`
private listaCambio = new Subject<Donador[]>()
  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<Donador[]>(this.url);
  }
  insert(donador:Donador) {
    return this.http.post(this.url, donador);
  }

  setList(ListaNueva:Donador[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
   //lo que se agrega para el editar
   listId(id: number) {
    return this.http.get<Donador>(`${this.url}/${id}`);
  }

  update(aut: Donador) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    return this.http.put(this.url + '/' + aut.id, aut);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
