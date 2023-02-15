import { Component, OnInit } from '@angular/core';
import Card from '../interfaces/card.interface';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  public atras='home'
  public cards:Card[]=[]
  constructor(private crudService:CrudService,
    private userService: UserService) {}

  async ngOnInit() {
    (await this.crudService.getCards())
      .subscribe(cards => {
        this.cards=[];
        cards.forEach(element => {
           if (element['email']===this.userService.emailAuth()) {
            this.cards.push(element)
           }
        });
      })
  }

  
}
