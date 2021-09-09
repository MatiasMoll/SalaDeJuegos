import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public nombreUsuario:string;
  constructor(
    public ingresoService : IngresoService,
    private router: Router
  ) { 
    console.log('El usuario esta logeado constructor' + this.ingresoService.isLogged);
  }

  ngOnInit(): void {  
    if(this.ingresoService.isLogged){
      this.nombreUsuario = IngresoService.userNameLogged;
    }
  }

  routeo(ruta){
    this.router.navigate(['/'+ruta]);
  }
}
