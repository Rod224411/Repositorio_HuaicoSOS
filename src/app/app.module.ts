import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DamnificadoComponent } from './component/Damnificado/Damnificado.component';
import { DamnificadoListarComponent } from './component/Damnificado/Damnificado-listar/Damnificado-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { Damnificado } from './model/Damnificado';
import { tipo_de_casoComponent } from './component/tipo-de-caso/tipo-de-caso.component';
import { tipo_de_casoListarComponent } from './component/tipo-de-caso/tipo-de-caso-listar/tipo-de-caso-listar.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { UbicacionlistarComponent } from './component/ubicacion/ubicacion-listar/ubicacion-listar.component';
import { DonadorComponent } from './component/donador/donador.component';
import { DonadorListarComponent } from './component/donador/donador-listar/donador-listar.component';
import { CuentabancariaComponent } from './component/cuentabancaria/cuentabancaria.component';
import { cuentabancaria } from './model/cuentabancaria';
import { cuentabancariaListarComponent } from './component/cuentabancaria/cuentabancaria-listar/cuentabancaria-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button';
import { DamnificadoCreaeditaComponent } from './component/Damnificado/damnificado-creaedita/damnificado-creaedita.component';
import { TipoDeCasoCreaeditaComponent } from './component/tipo-de-caso/tipo-de-caso-creaedita/tipo-de-caso-creaedita.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DonadorEditaComponent } from './component/donador/donador-creaedita/donador-creaedita.component';
import { UbicacionCreaeditaComponent } from './component/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { cuentabancariaCreaeditaComponent } from './component/cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './component/menu/menu.component';
import { InterfazComponent } from './component/interfaz/interfaz.component';
@NgModule({
  declarations: [
    AppComponent,
    DamnificadoComponent,
    DamnificadoListarComponent,
    tipo_de_casoComponent,
    tipo_de_casoListarComponent,
    UbicacionComponent,
    UbicacionlistarComponent,
    DonadorComponent,
    DonadorListarComponent,
    CuentabancariaComponent,
    cuentabancariaListarComponent,
    DamnificadoCreaeditaComponent,
    TipoDeCasoCreaeditaComponent,
    DonadorEditaComponent,
    UbicacionCreaeditaComponent,
    cuentabancariaCreaeditaComponent,
    MenuComponent,
    InterfazComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
      MatFormFieldModule,

      MatToolbarModule,
      MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

