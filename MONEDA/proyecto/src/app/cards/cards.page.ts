import { Component, OnInit } from '@angular/core';
import Card from '../interfaces/card.interface';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  public atras='home'
  public cards:Card[]=[]
  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.crudService.getCards().subscribe(cards=>{
      console.log(cards);
      this.cards=cards;
    })
  }

  
}
