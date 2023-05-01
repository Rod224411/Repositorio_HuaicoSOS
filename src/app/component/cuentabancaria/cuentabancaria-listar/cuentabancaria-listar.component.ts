import { Component, OnInit } from '@angular/core';
import { cuentabancaria } from 'src/app/model/cuentabancaria';
import {MatTableDataSource} from '@angular/material/table'
import { cuentabancariaService } from 'src/app/service/cuentabancaria.service';

@Component({
  selector: 'app-cuentabancaria-listar',
  templateUrl: './cuentabancaria-listar.component.html',
  styleUrls: ['./cuentabancaria-listar.component.css']
})
export class cuentabancariaListarComponent implements OnInit{
lista: cuentabancaria[]=[]
dataSource:MatTableDataSource<cuentabancaria>=new MatTableDataSource();
displayedColumns:string[]=['id','numero','cvv','vencimiento','accion01']

constructor(private aS:cuentabancariaService){
}



ngOnInit(): void {
  this.aS.list().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })

  this.aS.getList().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  })
}

boton_eliminar(idd:number){
  this.aS.delete(idd).subscribe(data=>{
    this.aS.list().subscribe(data=>{
      this.aS.setList(data);
  });})
}
}
