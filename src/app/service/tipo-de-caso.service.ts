import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tipo_de_caso } from '../model/tipo-de-caso';
import { Subject } from 'rxjs';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class tipo_de_casoService {
private url=`${base_url}/Tipos_de_caso`
private listaCambio = new Subject<tipo_de_caso[]>()

  constructor(private http:HttpClient ) { }
  list(){
    return this.http.get<tipo_de_caso[]>(this.url);
  }
  insert(Tipo_Caso:tipo_de_caso){
    return this.http.post(this.url,Tipo_Caso);
  }
  setList(ListaNueva:tipo_de_caso[]){
    this.listaCambio.next(ListaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  //lo que se agrega para el editar
  listId(id: number) {
    return this.http.get<tipo_de_caso>(`${this.url}/${id}`);
  }

  update(aut: tipo_de_caso) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    return this.http.put(this.url + '/' + aut.id, aut);
  }

  //para eliminar damnificado
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
