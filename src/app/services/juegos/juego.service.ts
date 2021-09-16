import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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

}
