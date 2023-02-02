import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  constructor(private http:HttpClient) { }

  mercados(){
    const peticion=this.http.get<String>(`https://api.frankfurter.app/currencies`)
    return peticion
  }
  divisia(query:string){
    return this.http.get(`https://api.frankfurter.app/latest?to=${query}`);
  }
}
