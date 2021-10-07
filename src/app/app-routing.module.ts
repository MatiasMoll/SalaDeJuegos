import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMensajesComponent } from './components/listado-mensajes/listado-mensajes.component';

import { IngresoModule } from './modules/ingreso/ingreso.module';
import { JuegosModule } from './modules/juegos/juegos.module';
import { ChatComponent } from './pages/chat/chat.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { UserLoggedGuard } from './guards/user-logged.guard';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home',component:HomeComponent,canActivate:[UserLoggedGuard]},
  { path: 'ingreso',loadChildren: () => import('./modules/ingreso/ingreso.module').then(m => IngresoModule) },
  { path: 'juegos',loadChildren: () => import('./modules/juegos/juegos.module').then(m => JuegosModule),/*canActivate:[UserLoggedGuard]*/},
  { path: 'chat',component:ChatComponent,canActivate:[UserLoggedGuard]},
  { path: 'quien-soy',component:QuienSoyComponent,canActivate:[UserLoggedGuard]},
  { path: 'encuesta',component:EncuestaComponent,canActivate:[UserLoggedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
