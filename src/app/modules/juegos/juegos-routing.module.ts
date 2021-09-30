import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AciertaNombreComponent } from './acierta-nombre/acierta-nombre.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';

const routes: Routes = [
  {path: '', redirectTo:'menuJuegos',pathMatch:'full'},
  {path: 'menuJuegos',component:MenuPrincipalComponent},
  {path: 'ahorcado', component:AhorcadoComponent},
  {path: 'mayor-o-menor', component:MayorMenorComponent},
  {path: 'aciertaNombre', component:AciertaNombreComponent},
  {path: 'listado', component:ListadoJuegosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
