import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required,this.spaceValidator]]
    });
  }

  registroWithEmailAndPassword(){
    
    this.auth.registroWithEmailAndPassword(this.formGroup.getRawValue()['email'],this.formGroup.getRawValue()['password'])
      .then(()=>{
          this.auth.isLogged = true;
         
          this.modal['titulo'] = 'Usuario creado correctamente';
          this.modal['cuerpo'] = 'Usuario ' + this.formGroup.getRawValue()['nombre'] + 'con email ' + this.formGroup.getRawValue()['email'] + ' creado correctamente';
      
          this.mostrarModal = true;
          this.router.navigate(['home']);
      })
      .catch((res)=>{
        
        console.log('entra al cath ' + res['code']);
        if(res['code'] == 'auth/email-already-in-use'){
          console.log('entra');
          
          this.modal['titulo'] = 'Email en uso';
          this.modal['cuerpo'] = 'El email ' + this.formGroup.getRawValue()['email'] + ' esta vinculado a un usuario existente';
        }else{
          
          this.modal['titulo'] = 'Ha ocurrido un error';
          this.modal['cuerpo'] = 'Ha ocurrido un error, contacte con el administrador';
        }       
        this.mostrarModal = true;

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
}
