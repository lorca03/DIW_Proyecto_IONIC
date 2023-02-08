import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datallecard',
  templateUrl: './datallecard.page.html',
  styleUrls: ['./datallecard.page.scss'],
})
export class DatallecardPage implements OnInit {

  public atras='cards'
  public card:{card:string}=this.rutaActiva.snapshot.params['card']
  public detalles:any[]=['Name','Bank','Account','Status','Valid']
  public detallesCard:any[]=[this.card,'BBVA','... ... ... 2138','Active','2020 - 2025']
  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
  }

}
