import { constructorParametersDownlevelTransform } from '@angular/compiler-cli';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

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
  constructor(public cRef:ChangeDetectorRef) { }

  ngOnInit(): void {  
    this.espaciosPalabra = new Array<any>();
    this.palabraElegida = this.palabras[Math.floor(Math.random() * 10)];
    for(let i = 0 ; i<this.palabraElegida.length;i++){
      this.espaciosPalabra[i] = '_';
    }
  }

  revisarLetra(letra){
    console.log(this.palabraElegida);
    console.log(letra);
    let espacioPal = this.espaciosPalabra.slice();
    let indice = -10

      if(this.palabraElegida.toLowerCase().includes(letra.toLowerCase())){
        for(let i  = 0 ; i< this.palabraElegida.length ; i++){
          if(indice != -10){
            console.log('entra ' + indice);
            espacioPal[this.palabraElegida.toLowerCase().indexOf(letra.toLowerCase(),indice+1)] = letra.toLowerCase();
          }else{
            indice = this.palabraElegida.toLowerCase().indexOf(letra.toLowerCase());
            espacioPal[indice] = letra.toLowerCase();
          }
          console.log(indice);
        }
       
      }
    this.espaciosPalabra = espacioPal;
    
    //this.espaciosPalabra = palabraUpdated;
   
  }

}
