import { Component, OnInit,Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Mensaje } from 'src/app/modelos/mensaje';
import { ChatService } from 'src/app/services/chat/chat.service';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-listado-mensajes',
  templateUrl: './listado-mensajes.component.html',
  styleUrls: ['./listado-mensajes.component.css']
})
export class ListadoMensajesComponent implements OnInit {

  @Input() iudUserLogged:string;
  uidUsuario;
  listadoMensajesTotales?: Mensaje[];
  listadoMensajesMostrar?: Mensaje[] = new Array<Mensaje>();
  mensajeActual?: Mensaje;
  currentIndex = -1;
  
  constructor(
    private serviceFireStore:ChatService
  ) {
   this.uidUsuario = IngresoService.iudUserLogged;
  }

  ngOnInit(): void {
    this.cargarMensajes();
    //this.add10Lines();
  }

  cargarMensajes(): void {
    
    this.serviceFireStore.getAll().snapshotChanges().pipe(      
      map( data => { 
        this.listadoMensajesMostrar = [];
        //console.log(data);
        data.map(men =>{
          
          console.log(men.payload.doc.data());
          let autorMap = men.payload.doc.data().emisor;
          let fechaMap = men.payload.doc.data().enviadoFecha;
          let mensajeMap = men.payload.doc.data().textoCuerpo;
          this.listadoMensajesMostrar.push(men.payload.doc.data());
        }) 
      })
    ).subscribe(datos => {
      //console.log('son datos '  + datos);
      //this.listadoMensajesMostrar.push(datos);
    });
   }

  add10Lines(){
    for(let i = 0 ; i < 10 ; i++){
      var mensajeActual = this.listadoMensajesTotales[i];
      console.log('mensaje ' + mensajeActual);
      if(mensajeActual != null){
        this.listadoMensajesMostrar.push(mensajeActual);
      }
    }
  }

  
}
