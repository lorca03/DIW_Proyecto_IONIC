import { Component, OnInit } from '@angular/core';
import { MercadosService } from '../services/mercados.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  public atras:string='home'
  constructor(private mercadosService:MercadosService) {
  }

  ngOnInit(): void {
   this.mercadosService.mercados()
    console.log('fdg');
    
  }

}
