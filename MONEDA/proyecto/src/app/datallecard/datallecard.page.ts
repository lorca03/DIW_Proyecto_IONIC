import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Card from '../interfaces/card.interface';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-datallecard',
  templateUrl: './datallecard.page.html',
  styleUrls: ['./datallecard.page.scss'],
})
export class DatallecardPage implements OnInit {

  public atras='cards'
  public cardName:string=this.rutaActiva.snapshot.params['card']
  public detalles:any[]=['Name','Bank','Account','Status','Valid']
  public cards:Card[]=[]
  public detallesCard:any[]=[this.cardName,'','','','']
  constructor(private rutaActiva:ActivatedRoute,
    private crudService:CrudService,
    private userService:UserService,
    private routes:Router) { }

  async ngOnInit() {
    (await this.crudService.getCards())
      .subscribe(cards => {
        this.cards = cards;
        this.cards.forEach(element => {
          if (element['name'] === this.cardName && element['email']===this.userService.emailAuth()) {
            this.detallesCard[1]=element['bank']
            this.detallesCard[2]=element['account']
            this.detallesCard[3]=element['status']
            this.detallesCard[4]=element['valid']
          }
        });
      })
  }

  deletecard(){
    this.cards.forEach(element => {
      if (element['name'] === this.cardName && element['email']===this.userService.emailAuth()) {
       this.crudService.deleteCard(element)
        this.routes.navigate(['/cards'])
      }
    });
    
  }

}
