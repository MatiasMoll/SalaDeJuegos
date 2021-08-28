import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoModule } from './modules/ingreso/ingreso.module';

const routes: Routes = [
  { path: '', redirectTo:'ingreso', pathMatch:'full'},
  { path:'ingreso',loadChildren: () => import('./modules/ingreso/ingreso.module').then(m => IngresoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
