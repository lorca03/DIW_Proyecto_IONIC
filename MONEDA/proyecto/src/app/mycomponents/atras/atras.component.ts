import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-atras',
  templateUrl: './atras.component.html',
  styleUrls: ['./atras.component.scss'],
})
export class AtrasComponent implements OnInit {

  @Input () destino: string='';
  constructor() { }

  ngOnInit() {

  }

}
