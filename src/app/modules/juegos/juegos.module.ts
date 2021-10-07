import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { ToastCustomComponent } from './toast-custom/toast-custom.component';
import { AciertaNombreComponent } from './acierta-nombre/acierta-nombre.component';
import { TablaPuntosComponent } from 'src/app/components/tabla-puntos/tabla-puntos.component';
import { JuegoPropioComponent } from './juego-propio/juego-propio.component';

@NgModule({
  declarations: [
    MenuPrincipalComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    ToastCustomComponent,
    AciertaNombreComponent,
    JuegoPropioComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule 
  ]
})
export class JuegosModule { }
