import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoLoL {

  constructor(private http:HttpClient) { 

  }

  public getChampion(name:string){
    this.http.get('https://thronesapi.com/api/v2/Characters').subscribe(response=>{
      (<Array<any>>response).forEach(element => {
        console.log('nombre ' + element.firstName);
        console.log('foto' + element.imageUrl);
        console.log('-----------------------------------');
      });  
      //console.log(response);
      });
  }
}
