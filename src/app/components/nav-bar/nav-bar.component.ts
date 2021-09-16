import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 
  @Input() nombreUsuario:string;
  constructor(
    public ingresoService : IngresoService,
    private router: Router
  ) { 

    console.log('El usuario esta logeado constructor' + this.ingresoService.isLogged);
    this.nombreUsuario = IngresoService.userNameLogged;
  }

  ngOnInit(): void {  
    if(this.ingresoService.isLogged){
      this.nombreUsuario = IngresoService.userNameLogged;
    }

  }

  routeo(ruta){
    this.router.navigate(['/'+ruta]);
  }

  logOut(){
    this.ingresoService.logout();
  }
}
