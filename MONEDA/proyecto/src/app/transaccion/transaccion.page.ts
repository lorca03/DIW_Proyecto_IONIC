import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {

  public atras: string = 'eleccionTransaccion';
  constructor() { }

  ngOnInit() {
  }

}
