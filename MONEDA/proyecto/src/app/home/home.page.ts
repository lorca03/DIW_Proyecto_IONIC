import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Card from '../interfaces/card.interface';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', '../app.component.scss'],
})
export class HomePage {
  public cards: Card[] = [];
  public cardSelec = 0;
  public cardsSelec: any = [];
  constructor(
    private crudService: CrudService,
    private userService: UserService,
    private alertController: AlertController
  ) {}

  async ngOnInit() {
    var index = 0;
    (await this.crudService.getCards()).subscribe((cards) => {
      this.cards = [];
      this.cardsSelec = [];
      cards.forEach((element) => {
        if (element['email'] === this.userService.emailAuth()) {
          this.cards.push(element);
          this.cardsSelec.push({
            label:  this.cards[index]['name'],
            type: 'radio',
            value: index,
          });
        }
        index++;
      });
    });
    if (!localStorage.getItem('cardSelec')) {
      localStorage.setItem('cardSelec', this.cardSelec + '');
    }
    this.cardSelec = parseInt(localStorage.getItem('cardSelec')!);
  }

  cambiarCard(data: string) {
    if (data != undefined) {
      localStorage.setItem('cardSelec', data);
      this.ngOnInit();
      
    }
  }
  async presentAlert(transac:any) {
    var alert = await this.alertController.create({
      header: 'Select your card',
      cssClass: 'cards-alert',
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            this.cambiarCard(data);
            transac.ngOnInit()
          },
        },
      ],
      inputs: this.cardsSelec,
    });
    await alert.present();
  }
}
