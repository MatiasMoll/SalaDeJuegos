import { Component, OnInit,Input } from '@angular/core';
import { Juego } from 'src/app/modelos/juego';

@Component({
  selector: 'app-tabla-puntos',
  templateUrl: './tabla-puntos.component.html',
  styleUrls: ['./tabla-puntos.component.css']
})
export class TablaPuntosComponent implements OnInit {

  @Input() juegos:Array<Juego>;
  @Input() nombreJuego:string;
  
  constructor() {
    console.log('estoy en el componente ' + this.juegos);
   }

  ngOnInit(): void {
  }

}
