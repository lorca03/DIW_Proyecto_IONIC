import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {
  public atras: string = 'eleccionTransaccion';
  constructor() {}

  ngOnInit() {}
  public numero = '0';
  onClick(event: any) {
    const dinero = document.getElementById('dinero');
    if (event.target.outerText != '') {
      if (this.numero == '0') {
        this.numero= event.target.outerText=='00'?'0':event.target.outerText;
      } else {
        this.numero += event.target.outerText;
      }
    } else {
      this.numero = '0';
    }
    if (dinero != null) {
      dinero.textContent = this.numero;
    }
  }
}
