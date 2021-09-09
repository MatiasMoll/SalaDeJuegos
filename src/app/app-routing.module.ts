import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoModule } from './modules/ingreso/ingreso.module';
import { JuegosModule } from './modules/juegos/juegos.module';
import { HomeComponent } from './pages/home/home.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home',component:HomeComponent},
  { path: 'ingreso',loadChildren: () => import('./modules/ingreso/ingreso.module').then(m => IngresoModule) },
  { path: 'juegos',loadChildren: () => import('./modules/juegos/juegos.module').then(m => JuegosModule)},
  { path: 'quien-soy',component:QuienSoyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
