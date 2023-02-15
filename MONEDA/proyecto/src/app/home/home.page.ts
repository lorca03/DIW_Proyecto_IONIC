import { Component } from '@angular/core';
import Card from '../interfaces/card.interface';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss','../app.component.scss'],
})
export class HomePage {

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
