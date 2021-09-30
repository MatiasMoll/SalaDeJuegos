import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import { Juego } from '../../modelos/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private dbPath = '/puntajeJuegos';

  juegosRef: AngularFirestoreCollection<Juego>;
  
  constructor(
    public db: AngularFirestore
  ) {
  
    this.juegosRef = db.collection(this.dbPath);
  }

  guardarPartida(juego: Juego){
    return this.juegosRef.add({...juego});
  }

  traerPartidas(nombreJuego:string): AngularFirestoreCollection<Juego>{
    console.log(nombreJuego);
    return this.db.collection(this.dbPath,ref => ref.where('nombreJuego','==',nombreJuego).orderBy('puntaje','desc'));
  }
} 
