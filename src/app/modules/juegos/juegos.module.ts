import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { ToastCustomComponent } from './toast-custom/toast-custom.component';





@NgModule({
  declarations: [
    MenuPrincipalComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    ToastCustomComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule    
  ]
})
export class JuegosModule { }
