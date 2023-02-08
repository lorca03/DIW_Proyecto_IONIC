import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  public atras='home'
  public cards=['Special card','Jose']
  constructor() { }

  ngOnInit() {
  }

}
