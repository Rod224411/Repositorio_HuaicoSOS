import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){

  }

  title = 'cemoCrud';

  // Variable para determinar si la tabla se muestra o no
  tablaVisible = false;

  // Función que se ejecuta al hacer clic en el botón para mostrar la tabla
  mostrarTabla() {
    if (this.tablaVisible == true) {
      this.tablaVisible = false;
    } else {
      this.tablaVisible = true;
    }
  }



  mensaje = 'Haz clic para mostrar las listas';

mostrarMensaje() {
  this.mensaje = 'Haz clic para mostrar las listas';
}

ocultarMensaje() {
  this.mensaje = '';
}




}
