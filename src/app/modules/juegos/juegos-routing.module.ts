import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

const routes: Routes = [
  {path: '', redirectTo:'menuJuegos',pathMatch:'full'},
  {path: 'menuJuegos',component:MenuPrincipalComponent},
  {path: 'ahorcado', component:AhorcadoComponent},
  {path: 'mayor-o-menor', component:MayorMenorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
