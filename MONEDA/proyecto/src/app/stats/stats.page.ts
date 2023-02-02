import { Component, OnInit } from '@angular/core';
import { MercadosService } from '../services/mercados.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  public atras: string = 'home';
  public monedasmostrar: string[] = ['USD', 'JPY', 'GBP', 'CHF', 'AUD'];
  public fotos: string[] = ['america.png', 'china.PNG', 'GBP', 'CHF', 'AUD'];
  public precios: string[] = [];
  public nombresmonedas:string[]=[]
  constructor(private mercadosService: MercadosService) {}

  ngOnInit(): void {
    this.idmonedas()
    this.monedasmostrar.forEach(element => {
      this.latest(element)
    });
    console.log(this.precios);
    
  }
  latest(element:any){
     this.mercadosService.divisia(element).subscribe(
      (resp:any)=>{
        this.precios.push(resp.rates);
    })
  }
  idmonedas(){
    this.mercadosService.mercados().subscribe(res=>{
      for (let index = 0; index < this.monedasmostrar.length; index++) {
        const element2 = this.monedasmostrar[index];
        for (let index = 0; index < Object.entries(res).length; index++) {
          if (element2==Object.entries(res)[index][0]) {
            this.nombresmonedas.push(Object.entries(res)[index][1])
          }
        }
      }
    });
  }
}


