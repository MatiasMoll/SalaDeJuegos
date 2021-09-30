import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuegosModule } from './modules/juegos/juegos.module';
import { ChatComponent } from './pages/chat/chat.component';
import { ListadoMensajesComponent } from './components/listado-mensajes/listado-mensajes.component';
import { EnvioMensajesComponent } from './components/envio-mensajes/envio-mensajes.component';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import { AciertaNombreComponent } from './modules/juegos/acierta-nombre/acierta-nombre.component';
import { ListadoJuegosComponent } from './modules/juegos/listado-juegos/listado-juegos.component';
import { TablaPuntosComponent } from './components/tabla-puntos/tabla-puntos.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    QuienSoyComponent,
    ChatComponent,
    ListadoMensajesComponent,
    EnvioMensajesComponent,
    ListadoJuegosComponent,
    TablaPuntosComponent,
    EncuestaComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    JuegosModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    NavBarComponent,
    TablaPuntosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


