import { Component, OnInit } from '@angular/core';
import Card from 'src/app/interfaces/card.interface';
import { CrudService } from 'src/app/services/crud.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {

  public transaciones:number[] = [];
  constructor(private crudService: CrudService,
    private userService: UserService,) { }

  async ngOnInit() {
    (await this.crudService.getCards()).subscribe((cards) => {
      this.transaciones = [];
      var index=0;
      cards.forEach((element) => {
        if (element['email'] === this.userService.emailAuth() && index+''==localStorage.getItem('cardSelec.'+ this.userService.emailAuth())) {
          this.transaciones=element['transactions'].slice(0,3);
          index++
        }
      });

    });
    
  }
 

}
