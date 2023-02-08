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
  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit() {
  }

}
