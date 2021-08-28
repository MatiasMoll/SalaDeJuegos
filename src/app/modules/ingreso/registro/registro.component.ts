import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public nuevoUsr:string;
  public nuevoPass:string;
  public formGroup:FormGroup;

  constructor(
    public router:Router,
    public auth:AuthService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre':['',[Validators.required,this.spaceValidator]],
      'apellido':['',Validators.required],
      'edad':['',[Validators.required,Validators.min(18),Validators.max(99)]],
      'sexo':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'terminos':['',Validators.required]
    });
  }

  registroWithEmailAndPassword(){
    this.auth.registroWithEmailAndPassword(this.nuevoUsr,this.nuevoPass);
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
}
