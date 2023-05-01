import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { AuthorCreaeditaComponent } from './component/author/author-creaedita/author-creaedita.component';
import { DamnificadoComponent } from './component/Damnificado/Damnificado.component';
import { DamnificadoCreaeditaComponent } from './component/Damnificado/damnificado-creaedita/damnificado-creaedita.component';
import { tipo_de_casoComponent } from './component/tipo-de-caso/tipo-de-caso.component';
import { TipoDeCasoCreaeditaComponent } from './component/tipo-de-caso/tipo-de-caso-creaedita/tipo-de-caso-creaedita.component';
import { DonadorComponent } from './component/donador/donador.component';
import { DonadorEditaComponent } from './component/donador/donador-creaedita/donador-creaedita.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { UbicacionCreaeditaComponent } from './component/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { cuentabancaria } from './model/cuentabancaria';
import { CuentabancariaComponent } from './component/cuentabancaria/cuentabancaria.component';
import { cuentabancariaCreaeditaComponent } from './component/cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';



const routes: Routes = [
  {
    path:'authors',component:AuthorComponent,children:[
      {path:'nuevo', component:AuthorCreaeditaComponent},
      {path: 'edicion/:id',component:AuthorCreaeditaComponent}
    ]},
    {
    path:'Damnificados',component:DamnificadoComponent,children:[
      {path:'nuevo',component:DamnificadoCreaeditaComponent},
      {path: 'edicion/:id',component:DamnificadoCreaeditaComponent}
    ]
  },
  {    path:'Tipos_de_caso',component:tipo_de_casoComponent,children:[
    {
      path:'nuevo',component:TipoDeCasoCreaeditaComponent
    },
    {path:'edicion/:id',component:TipoDeCasoCreaeditaComponent}
  ]},
  {
    path:'Donadores',component:DonadorComponent,children:[
      {
        path:'nuevo',component:DonadorEditaComponent
      },
      {path:'edicion/:id',component:DonadorEditaComponent}
    ]
  },
  {
    path:'Ubicaciones',component:UbicacionComponent,children:[
   {
     path:'nuevo',component:UbicacionCreaeditaComponent
   },
   {path:'edicion/:id',component:UbicacionCreaeditaComponent}
 ]
},
{
  path:'cuentabancarias',component:CuentabancariaComponent,children:[
    {
      path:'nuevo',component:cuentabancariaCreaeditaComponent
    },
    {path:'edicion/:id',component:cuentabancariaCreaeditaComponent}
  ]
},
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
