import { Component, OnDestroy, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Console } from 'console';
import { gotJuego } from 'src/app/services/gotGame/gotJuego';
import { IngresoService } from 'src/app/services/ingreso.service';
import { JuegoService } from 'src/app/services/juegos/juego.service';
import { Juego } from '../../../modelos/juego';

@Component({
  selector: 'app-acierta-nombre',
  templateUrl: './acierta-nombre.component.html',
  styleUrls: ['./acierta-nombre.component.css']
})
export class AciertaNombreComponent implements OnInit, OnDestroy{

  listCharacters = [];
  personajeElegido;
  puntaje = 0;
  nombres:Array<string> = [];
  nombresSecundarios:Array<string> = [];
  nombresSecundariosAux:Array<string> = [];

  constructor(
    public juegoService:gotJuego,
    public gameService:JuegoService,
    public ingresoService:IngresoService
  ) { }

  ngOnDestroy(){
    this.gameService.guardarPartida(new Juego('aciertaNombre',IngresoService.userNameLogged,this.puntaje,true));
  }

  ngOnInit(): void {
    this.juegoService.getAllCharacters().subscribe(response=>{
      (<Array<any>>response).forEach(element => {
         this.listCharacters.push({nombre:element.fullName,foto:element.imageUrl});
       });  
       this.iniciarJuego();

     });;
    console.log('array personajes ' + this.listCharacters);
    
  }

  iniciarJuego(){
    let indexElegido = this.random(this.listCharacters.length);
    console.log(indexElegido);
    console.log('array personajes ' + this.listCharacters);
    this.personajeElegido = this.listCharacters[indexElegido];
    console.log('nombre del personaje elegido ' + this.personajeElegido.nombre);
    for(let i = 0 ; i < 6; i++ ){
      if(i === 0){
        this.nombres[i] = this.personajeElegido.nombre;
      }else{
        do{
          let indice = this.random(this.listCharacters.length);
          var pers = this.listCharacters[indice];
        }while(this.nombres.includes(pers.nombre));
        this.nombres[i] = pers.nombre;
      }    
    }
    console.log('array nombres ' + this.nombres);
    this.nombres.sort(function(){return  Math.random() - 0.5})
    this.nombresSecundarios = this.nombres.slice(0,3);
    this.nombres.slice(0,1);
    this.nombresSecundariosAux = this.nombres.slice(3,6);
    this.nombresSecundariosAux.slice(0,1);
  }

  random(max) {
    return Math.floor(Math.random() * max);
  }

  checkJugada(nombre){

    if(nombre == this.personajeElegido.nombre){
      this.puntaje = this.puntaje + 1;  
    }else{
      this.puntaje = this.puntaje - 1;
    }
    this.iniciarJuego();
  }
}