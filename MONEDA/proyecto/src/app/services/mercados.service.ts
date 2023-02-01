import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  public host :string='api.frankfurter.app';
  public apiKey :string='7c83dc79e551e3f4074131f1b14fe9a3';
  constructor(private http:HttpClient) { }

  mercados(){
    this.http.get(`https://${this.host}/latest?to=USD`)
    .subscribe(
      (resp:any)=>{
      console.log(resp.rates);
    });
    // fetch(`https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`) 
    // .then(resp => resp.json()) 
    // .then((data) => { 
    //   alert(`10 GBP = ${data.rates.USD} USD`); 
    // });
  }
}
