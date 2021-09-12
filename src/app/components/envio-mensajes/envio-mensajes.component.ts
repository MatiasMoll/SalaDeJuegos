import { Component, OnInit,Input } from '@angular/core';
import { Mensaje } from 'src/app/modelos/mensaje';
import { ChatService } from 'src/app/services/chat/chat.service';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-envio-mensajes',
  templateUrl: './envio-mensajes.component.html',
  styleUrls: ['./envio-mensajes.component.css']
})
export class EnvioMensajesComponent implements OnInit {
  nuevoMensaje: Mensaje;
  public fechaActual:Date = new Date();
  
  @Input() iudUserLogged:string;

  constructor(
    private servicioFirestore:ChatService
  ) {
    this.nuevoMensaje = new Mensaje();
  }

  ngOnInit(): void {
  }

  EnviarMensaje() {
    console.log(IngresoService.userNameLogged);

    this.nuevoMensaje.emisor = IngresoService.userNameLogged != null ?  IngresoService.userNameLogged : 'Invitado';
    this.nuevoMensaje.enviadoFecha = this.getFechaActual(); 
    this.nuevoMensaje.created = Date.now();
    this.nuevoMensaje.emisorUid = IngresoService.iudUserLogged;
    this.servicioFirestore.create(this.nuevoMensaje).then(()=>{
      console.log("se envio el mensaje Fire");
    });
    this.nuevoMensaje = new Mensaje();
    
  }

  EnviarMensajePorEnter(keycode){
    var teclaApretada = keycode['code'];
    if(teclaApretada == 'Enter' || teclaApretada == 'NumpadEnter'){
      this.EnviarMensaje();
    }
   
  }
  getFechaActual():string{
    let año = this.fechaActual.getFullYear();
    let mes = this.fechaActual.getMonth();
    let dia = this.fechaActual.getDate();
    let hora = this.fechaActual.getHours();
    let minuto = this.fechaActual.getMinutes();
    let segundos = this.fechaActual.getSeconds();
    
    return año + '-'+mes+'-'+dia+' '+hora+':'+minuto+':'+segundos;
  }

}
