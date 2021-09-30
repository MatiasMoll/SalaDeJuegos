import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  public nuevoUsr:string;
  public nuevoPass:string;
  public mostrarModal:Boolean = false;
  public modal:Object = {'titulo':'','cuerpo':''};
  public formGroup:FormGroup;

  constructor(
    public router:Router,
    public auth:IngresoService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre':['',[Validators.required,this.spaceValidator]],
      'apellido':['',Validators.required],
      'edad':['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'sexo':['',Validators.required],
      'numeroTelefono':['',[Validators.required,Validators.pattern("[0-9 ]{10}")]],
      'juegoFavorito': ['',Validators.required],
      'puntajeSala':['',Validators.required],
      'opinionJuego':['',Validators.required]
    });
  }

  private spaceValidator(control: AbstractControl): null | object {
    const nombre = <string> control.value;
    const espacios = nombre.includes(' ');

    if(espacios){
      return {
        contieneEspacios:true
      }
    }else{
      return null;
    }
  }

  enviarEncuesta(){

  }
}
