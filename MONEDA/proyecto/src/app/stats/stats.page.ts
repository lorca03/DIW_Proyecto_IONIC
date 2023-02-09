import { Component, OnInit } from '@angular/core';
import { MercadosService } from '../services/mercados.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  public atras: string = 'home';
  public monedasmostrar: string[] = ['USD', 'HKD', 'GBP', 'CHF', 'AUD'];
  public fotos: string[] = [
    'america.png',
    'hk.png',
    'gbp.png',
    'sw.png',
    'aus.png',
  ];
  public precios: any[] = [0, 0, 0, 0, 0];
  public nombresmonedas: string[] = [];
  constructor(private mercadosService: MercadosService) {}

  ngOnInit(): void {
    this.idmonedas();
    this.monedasmostrar.forEach((element) => {
      this.mercadosService.divisia(element).subscribe((resp: any) => {
        switch (element) {
          case 'USD':
            this.precios[0] = Object.values(resp.rates)[0];
            break;
          case 'HKD':
            this.precios[1] = Object.values(resp.rates)[0];
            break;
          case 'GBP':
            this.precios[2] = Object.values(resp.rates)[0];
            break;
          case 'CHF':
            this.precios[3] = Object.values(resp.rates)[0];
            break;
          case 'AUD':
            this.precios[4] = Object.values(resp.rates)[0];
            break;
        }
      });
    });
  }
  idmonedas() {
    this.mercadosService.mercados().subscribe((res) => {
      for (let index = 0; index < this.monedasmostrar.length; index++) {
        const element2 = this.monedasmostrar[index];
        for (let index = 0; index < Object.entries(res).length; index++) {
          if (element2 == Object.entries(res)[index][0]) {
            this.nombresmonedas.push(Object.entries(res)[index][1]);
          }
        }
      }
    });
  }
}
