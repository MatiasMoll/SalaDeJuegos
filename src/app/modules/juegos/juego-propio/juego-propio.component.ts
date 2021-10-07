import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/modelos/juego';
import { IngresoService } from 'src/app/services/ingreso.service';
import { JuegoService } from 'src/app/services/juegos/juego.service';

@Component({
  selector: 'app-juego-propio',
  templateUrl: './juego-propio.component.html',
  styleUrls: ['./juego-propio.component.css']
})
export class JuegoPropioComponent implements OnInit {

  cartaSeleccionada = null;
  empezoJuego = false;
  cartaPosterior;
  
  nuevoJuego:Juego;
  puntuacion = 0;
  puntuacionCasa = 0;
  cartas = new Array<any>();

  //Variables para el toast

  public message:string;
  public titulo:string;
  public isWin:boolean;
  public endGame:boolean;
  //--------------------------


  constructor(
    public juegoService:JuegoService,
    private router:Router
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

  empezarJuego(){
    this.empezoJuego = true;
    this.endGame = false;
    this.puntuacion = 0;
    this.puntuacionCasa = 0;
    this.cartaSeleccionada = null;
    this.elegirCarta();
  }

  checkJugada(){
    this.elegirCarta();
    this.puntuacion = this.puntuacion + this.cartaSeleccionada.value;
    if(this.puntuacion > 21){
      this.finPartida(false);
    } 
  }

  checkJugadaIA(){
    this.elegirCarta();
    this.puntuacionCasa = this.puntuacionCasa + this.cartaSeleccionada.value;
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
  }

  noSeguirPidiendo(){

    do{
     this.checkJugadaIA();
    }while(this.random() == 5 || this.random() == 8 || this.puntuacionCasa <= 21);
    if(this.puntuacionCasa > 21){
      this.finPartida(true);
    }else if(this.puntuacion == 21 && this.puntuacionCasa == 21){
      this.finPartida(false);
    }else{
      this.finPartida(false);
    }
  }

  pickearCarta(){
    this.cartaSeleccionada = this.cartas[this.random()];
  }

  pedirOtra(){
    this.elegirCarta();
  }
  
  finPartida(gano){
    let puntaje =  gano ? 10 : 0;
    this.isWin = gano;
    this.juegoService.guardarPartida(new Juego('BlackJack',IngresoService.userNameLogged,puntaje,gano));
    this.titulo = 'Resultado en el BlackJack';
    this.message = gano ? 'Has vendico al casino, ganaste 10 puntos' :
    'La casa te ha ganado, vuelve a intentarlo';
    this.endGame = true;
    
  }

  iniciarJuego(){
    this.endGame = false;
    this.puntuacionCasa = 0;
    this.puntuacion = 0;
    this.cartaSeleccionada = null;
    this.elegirCarta();
  }

  volverAlHome(){
    this.router.navigate(['/juegos/menuJuegos']);
  }

}
