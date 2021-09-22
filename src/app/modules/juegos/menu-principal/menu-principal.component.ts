import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoLoL } from 'src/app/services/juegoLol/juegoLol.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(
    private router:Router,
    private servicio:JuegoLoL
  ) { 
    this.servicio.getChampion('asd');
  }

  ngOnInit(): void {
  }

  routeo(ruta){
    this.router.navigate(['/juegos/'+ruta]);
  }
}
