import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atras',
  templateUrl: './atras.component.html',
  styleUrls: ['./atras.component.scss'],
})
export class AtrasComponent implements OnInit {

  @Input () destino: string="";
  constructor(private routes:Router) { }

  ngOnInit() {

  }
  atras(){
    this.routes.navigate(['/'+this.destino])
  }


}
