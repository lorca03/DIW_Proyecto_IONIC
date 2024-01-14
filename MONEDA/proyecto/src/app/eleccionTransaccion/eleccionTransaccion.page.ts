import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-eleccionTransaccion',
  templateUrl: './eleccionTransaccion.page.html',
  styleUrls: ['./eleccionTransaccion.page.scss'],
})
export class EleccionTransaccionPage implements OnInit {

  public atras: string='home';
  public balance: number=0;
  constructor(private crudService: CrudService,private userService: UserService,) { }

  async ngOnInit() {
    (await this.crudService.getCards()).subscribe((cards) => {
      var index=0;
      cards.forEach((element) => {
        if (element['email'] === this.userService.emailAuth()&&index+''==localStorage.getItem('cardSelec.'+ this.userService.emailAuth())) {
          this.balance=cards[parseInt(localStorage.getItem('cardSelec.'+ this.userService.emailAuth())!)]['balance']
        }
        index++;
      });
    });
  }

}
