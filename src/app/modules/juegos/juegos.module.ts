import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { AppModule } from 'src/app/app.module';




@NgModule({
  declarations: [
    MenuPrincipalComponent,
    AhorcadoComponent,
    MayorMenorComponent,
    
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
    
  ]
})
export class JuegosModule { }
