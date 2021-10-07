import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Juego } from 'src/app/modelos/juego';
import { JuegoService } from 'src/app/services/juegos/juego.service';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.css']
})
export class ListadoJuegosComponent implements OnInit {

  listadoPuntajeAhorcado:Array<Juego> =  [];
  listadoPuntajeMayorMenor:Array<Juego> =  [];
  listadoPuntajePreguntado:Array<Juego> =  [];
  listadoPuntajeBlackJack:Array<Juego> = [];
  constructor(
    private juegoService:JuegoService
  ) {

  }

  ngOnInit(): void {
    this.traerJuego('Ahorcado');
    this.traerJuego('mayorMenor');
    this.traerJuego('aciertaNombre');
    this.traerJuego('BlackJack');
  }


  traerJuego(nombreJuego:string){
    this.juegoService.traerPartidas(nombreJuego).snapshotChanges().pipe(   
      map( data => { 
        var listado:Array<Juego> = [];
        //console.log(data);
        data.map(men =>{
          console.log('datos ' + men.payload.doc.data().usuario);
          let creador = men.payload.doc.data().usuario;
          let puntos = men.payload.doc.data().puntaje;
          let isWin = men.payload.doc.data().gano;
          let juego = new Juego(nombreJuego,creador,puntos,isWin);
          listado.push(juego);
        });
        console.log('juego ' + listado);
        switch (nombreJuego){
          case 'Ahorcado':{
            this.listadoPuntajeAhorcado = listado;
            break;
          }
          case 'mayorMenor':{
            this.listadoPuntajeMayorMenor = listado;
            break;
          }
          case 'aciertaNombre':{
            this.listadoPuntajePreguntado = listado;
            break;
          }
          case 'BlackJack':{
            this.listadoPuntajeBlackJack = listado;
            break;
          }
        }

      })
    ).subscribe(datos => {
      //console.log('son datos '  + datos);
      //this.listadoMensajesMostrar.push(datos);
    });
  }
}
