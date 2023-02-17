import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Card from '../interfaces/card.interface';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage implements OnInit {
  public atras: string = 'eleccionTransaccion';
  public numero = '0';
  public cards: Card[] = [];
  public eleccion: string = this.rutaActiva.snapshot.params['eleccion'];
  constructor(
    private rutaActiva: ActivatedRoute,
    private crudService: CrudService,
    private userService: UserService,
    private routes: Router
  ) {}

  async ngOnInit() {
    this.numero = '0';
    //document.getElementById('dinero')?.innerText='0';
    (await this.crudService.getCards()).subscribe((cards) => {
      this.cards = [];
      cards.forEach((element) => {
        if (element['email'] === this.userService.emailAuth()) {
          this.cards.push(element);
        }
      });
    });
  }

  onClick(event: any) {
    const dinero = document.getElementById('dinero');
    if (event.target.outerText != '') {
      if (this.numero == '0') {
        this.numero =
          event.target.outerText == '00' ? '0' : event.target.outerText;
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

  transaccion() {
    var select = document.getElementsByName('banco')[0] as HTMLSelectElement;
    const tarjetaSelec = select.options[select.selectedIndex].value;
    console.log(tarjetaSelec);
    var cantidad = document.getElementById('dinero')?.textContent;
    var transac: any = this.eleccion === 'deposit' ? cantidad : '-' + cantidad;
    this.cards.forEach((element) => {
      if (
        element['name'] == tarjetaSelec &&
        element['email'] === this.userService.emailAuth()
      ) {
        var balance: number = parseInt(element.balance + '');
        var transaccion = balance + parseInt(transac!);
        this.crudService.transaccion(transaccion!, tarjetaSelec);
        this.routes.navigate(['/home']);
      }
    });
  }
}
