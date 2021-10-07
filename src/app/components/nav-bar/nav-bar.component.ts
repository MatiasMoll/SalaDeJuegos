import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

 
  static nombreUsuario:string;
  constructor(
    public ingresoService : IngresoService,
    private router: Router
  ) { 


  }

  ngOnInit(): void {  
  }

  routeo(ruta){
    this.router.navigate(['/'+ruta]);
  }

  logOut(){
    this.ingresoService.logout();
  }

  get getNombreUsuario() {
    return NavBarComponent.nombreUsuario;
  }
}
