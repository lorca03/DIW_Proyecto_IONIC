import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  public cardSelec=0
  public cardsSelec:any=[]
  constructor(private crudService:CrudService,
    private userService: UserService,
    private alertController: AlertController) {}

  async ngOnInit() {
    var index=0;
    (await this.crudService.getCards())
      .subscribe(cards => {
        this.cards=[];
        cards.forEach(element => {
           if (element['email']===this.userService.emailAuth()) {
            this.cards.push(element)
            this.cardsSelec.push({
              label: this.cards[index]['name'],
              type: 'radio',
              value: index,
            })
           }
           index++
        });
      })
      if(!localStorage.getItem('cardSelec')){
        localStorage.setItem('cardSelec',this.cardSelec+'')
      }
      this.cardSelec=parseInt(localStorage.getItem('cardSelec')!)
  }

  cambiarCard(){
    localStorage.setItem('cardSelec','1');
    this.ngOnInit()
  }
  async presentAlert() {
    var alert = await this.alertController.create({
      header: 'Select your card',
      buttons: [
        {text:'OK',
        handler:data=>{
        console.log(data);
      }}],
      inputs: this.cardsSelec,
    });
    await alert.present();
  }

}
