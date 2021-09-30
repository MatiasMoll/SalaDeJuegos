import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(
    private router:Router
  ) { 
    
  }

  ngOnInit(): void {
  }

  routeo(ruta){
    this.router.navigate(['/juegos/'+ruta]);
  }
}
