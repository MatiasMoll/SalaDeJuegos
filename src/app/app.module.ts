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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    QuienSoyComponent,
    ChatComponent,
    ListadoMensajesComponent,
    EnvioMensajesComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    JuegosModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


