import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class gotJuego {

  listCharacters = [];
  constructor(private http:HttpClient) { 

  }

  public getAllCharacters(){
    return this.http.get('https://thronesapi.com/api/v2/Characters');
  }
}