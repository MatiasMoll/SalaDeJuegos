
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from 'src/app/modelos/juego';
import { IngresoService } from 'src/app/services/ingreso.service';
import { JuegoService } from 'src/app/services/juegos/juego.service';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  public palabras = [
    'Peca','Principal','Araña','Perpetuo','Afecto','Piscina','Ladrillos','Cabra','Clavo','Desabrochar'
  ];

  public palabraElegida;
  public espaciosPalabra:Array<any>;
  public vidas:number;
  public nuevoJuego:Juego;
  public puntaje:number;

  //Variables para el toast

  public message:string;
  public titulo:string;
  public win:boolean;
  public endGame:boolean;
  //--------------------------

  constructor(
    public cRef:ChangeDetectorRef,
    public gameService:JuegoService,
    public router:Router
  ) { }

  ngOnInit(): void {  
    this.iniciarJuego();
  }

  revisarLetra(letra){
    
    let espacioPal = this.espaciosPalabra.slice();
    
    if(this.palabraElegida.toLowerCase().includes(letra.toLowerCase())){
      let indice = -10;
      for(let i  = 0 ; i < this.palabraElegida.length ; i++){
        if(indice != -10){
          console.log('entra ' + indice);
          espacioPal[this.palabraElegida.toLowerCase().indexOf(letra.toLowerCase(),indice+1)] = letra.toLowerCase();
        }else{
          console.log('else esle ' + this.palabraElegida.toLowerCase().indexOf(letra.toLowerCase()));
          indice = this.palabraElegida.toLowerCase().indexOf(letra.toLowerCase());
          console.log('else ' + indice);
          espacioPal[indice] = letra.toLowerCase();                     
        }
      }
      this.espaciosPalabra = espacioPal;
    }else{        
      this.vidas = this.vidas-1;
    }

    console.log('son iguales ' + this.espaciosPalabra.slice() == this.palabraElegida.slice());
    console.log('palbra elegida ' + this.palabraElegida.slice());
    console.log('palabra espacio ' + this.espaciosPalabra.slice(0,this.espaciosPalabra.length));
 
    if(this.vidas == 0){
      console.log(this.vidas);
      this.finPartida();
    }else if(!this.espaciosPalabra.includes('_')){
      this.finPartida();
    }

    (<HTMLButtonElement>document.getElementById(letra)).disabled = true;
  }

  volverAlHome(){
    this.router.navigate(['/juegos/menuJuegos']);
  }

  iniciarJuego(){
    this.endGame = false;
    this.vidas = 5;
    this.puntaje = 0;
    this.espaciosPalabra = new Array<any>();
    this.activarTodasLasLetras();
    this.palabraElegida = this.palabras[Math.floor(Math.random() * 10)];
    for(let i = 0 ; i<this.palabraElegida.length;i++){
      this.espaciosPalabra[i] = '_';
    }

  }

  finPartida(){
    this.gameService.guardarPartida(new Juego('Ahorcado',IngresoService.userNameLogged,this.vidas * 10,this.vidas!=0));
    this.titulo = 'Resultado en el Ahorcado';
    this.message = this.vidas==0 ? 'Lamentablemente has perdido, intentalo nuevamente. La palabra era ' + this.palabraElegida :
    'Felicidades! has ganado esta partidas, te has llevado ' + this.vidas * 10 + ' puntos!';
    this.win = this.vidas != 0;
    this.endGame = true;
    
  }

  activarTodasLasLetras(){
    (<HTMLButtonElement>document.getElementById('A')).disabled = false;
    (<HTMLButtonElement>document.getElementById('B')).disabled = false;
    (<HTMLButtonElement>document.getElementById('C')).disabled = false;
    (<HTMLButtonElement>document.getElementById('D')).disabled = false;
    (<HTMLButtonElement>document.getElementById('E')).disabled = false;
    (<HTMLButtonElement>document.getElementById('F')).disabled = false;
    (<HTMLButtonElement>document.getElementById('G')).disabled = false;
    (<HTMLButtonElement>document.getElementById('H')).disabled = false;
    (<HTMLButtonElement>document.getElementById('I')).disabled = false;
    (<HTMLButtonElement>document.getElementById('J')).disabled = false;
    (<HTMLButtonElement>document.getElementById('L')).disabled = false;
    (<HTMLButtonElement>document.getElementById('M')).disabled = false;
    (<HTMLButtonElement>document.getElementById('N')).disabled = false;
    (<HTMLButtonElement>document.getElementById('O')).disabled = false;
    (<HTMLButtonElement>document.getElementById('P')).disabled = false;
    (<HTMLButtonElement>document.getElementById('Q')).disabled = false;
    (<HTMLButtonElement>document.getElementById('R')).disabled = false;
    (<HTMLButtonElement>document.getElementById('S')).disabled = false;
    (<HTMLButtonElement>document.getElementById('T')).disabled = false;
    (<HTMLButtonElement>document.getElementById('U')).disabled = false;
    (<HTMLButtonElement>document.getElementById('V')).disabled = false;
    (<HTMLButtonElement>document.getElementById('W')).disabled = false;
    (<HTMLButtonElement>document.getElementById('X')).disabled = false;
    (<HTMLButtonElement>document.getElementById('Y')).disabled = false;
    (<HTMLButtonElement>document.getElementById('Z')).disabled = false;


  }
}
