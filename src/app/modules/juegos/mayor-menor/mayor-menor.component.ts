import { Component, OnDestroy, OnInit } from '@angular/core';
import { Juego } from 'src/app/modelos/juego';
import { IngresoService } from 'src/app/services/ingreso.service';
import { JuegoService } from 'src/app/services/juegos/juego.service';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit, OnDestroy {

  cartaSeleccionada = null;
  cartaPosterior;
  numeroElegido;
  nuevoJuego:Juego;
  puntuacion = 0;
  cartas = new Array<any>();
  constructor(
    public juegoService:JuegoService
  ) {
    
  }

  ngOnDestroy(){
    this.juegoService.guardarPartida(new Juego('mayorMenor',IngresoService.userNameLogged,this.puntuacion,true));
  }

  ngOnInit(): void {
    this.cartas = [
      {value:1,url:'../../../../assets/mayorMenos/AsCorazones.jpg'},
      {value:2,url:'../../../../assets/mayorMenos/DosCorazones.jpg'},
      {value:3,url:'../../../../assets/mayorMenos/TresCorazones.jpg'},
      {value:4,url:'../../../../assets/mayorMenos/CuatroCorazones.jpg'},
      {value:5,url:'../../../../assets/mayorMenos/CincoCorazones.jpg'},
      {value:6,url:'../../../../assets/mayorMenos/SeisCorazones.jpg'},
      {value:7,url:'../../../../assets/mayorMenos/SieteCorazones.jpg'},
      {value:8,url:'../../../../assets/mayorMenos/OchoCorazones.jpg'},
      {value:9,url:'../../../../assets/mayorMenos/NueveCorazones.jpg'},
      {value:10,url:'../../../../assets/mayorMenos/DiezCorazones.jpg'},
      {value:11,url:'../../../../assets/mayorMenos/OnceCorazones.jpg'},
      {value:12,url:'../../../../assets/mayorMenos/DoceCorazones.jpg'},
      {value:13,url:'../../../../assets/mayorMenos/TreceCorazones.jpg'}
    ];
    this.elegirCarta();
  }

  checkJugada(isMayor){
    let valorViejaCarta = this.cartaSeleccionada.value;
    this.elegirCarta();
    if(isMayor && this.cartaSeleccionada.value > valorViejaCarta){
      this.puntuacion = this.puntuacion + 3;
    }else if(!isMayor && this.cartaSeleccionada.value < valorViejaCarta){
      this.puntuacion = this.puntuacion + 3;
    }else{
      this.puntuacion = this.puntuacion - 1 ;
    }
  }

  random() {
    return Math.floor(Math.random() * 13)
  }

  elegirCarta(){
    if(this.cartaSeleccionada == null){
      this.pickearCarta();
    }else{
      let viejaUrl = this.cartaSeleccionada.url;
      do{
        this.pickearCarta();
      }while(viejaUrl == this.cartaSeleccionada.url);
    }

    //if(this.cartaSeleccionada == null){
      //this.cartaSeleccionada = this.cartas[this.random()];
    /* }else{
      this.cartaPosterior = this.cartas[this.random()];
    }*/

  }

  pickearCarta(){
    this.cartaSeleccionada = this.cartas[this.random()];
  }

  
}
