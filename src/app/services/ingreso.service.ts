import { Injectable } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  private usersLogged:string = '/userLogged';
  public isLogged:boolean = false;
  public static userNameLogged:string;
  public static iudUserLogged:string;

  UsuariosRef: AngularFirestoreCollection<any>;

  constructor(
      public afAuth: AngularFireAuth,
      public router: Router, // Inject Firebase auth service
      public db:AngularFirestore
  ) { 
      this.UsuariosRef = db.collection(this.usersLogged);
  }

  // Sign in with Google
  GoogleAuth() {
      return this.AuthLogin(new firebase.default.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
          console.log('You have been successfully logged in!');
          console.log(provider);
          console.log(result.additionalUserInfo.profile);
          NavBarComponent.nombreUsuario = result.additionalUserInfo.profile['name'];
          IngresoService.userNameLogged = result.additionalUserInfo.profile['name'];
          IngresoService.iudUserLogged = result.additionalUserInfo.profile['id'];
          this.isLogged = true;
          
          this.router.navigate(['home']);

      }).catch((error) => {
          console.log(error)
      })
  }

  //Auth with emailAndPassword
  loginWithEmailAndPassword(name:string,pass:string){
      this.afAuth.signInWithEmailAndPassword(name,pass)
          .then((result)=>{
              IngresoService.iudUserLogged = result.user.uid;
              console.log(result.user);
              console.log(name);
              NavBarComponent.nombreUsuario = name;
              IngresoService.userNameLogged = name;
              this.isLogged = true;
              console.log(this.isLogged);
              this.UsuariosRef.add({email:name,logged:Date.now()});
              this.router.navigate(['home']);
          })
          .catch((res)=>{
              alert(res);
              this.router.navigate(['error']);
          });      
  }
  
  registroWithEmailAndPassword(name:string,pass:string){
      return this.afAuth.createUserWithEmailAndPassword(name,pass);

  }
  
  logout(){
    console.log('actualizate');
    this.afAuth.signOut().then(()=>{
        this.isLogged = false;
        this.router.navigate(['home']);
    });
  }

}
