import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import Card from '../interfaces/card.interface';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.page.html',
  styleUrls: ['./addcard.page.scss'],
})
export class AddcardPage implements OnInit {

  public atras='cards'
  public adds=['name','bank','account','status','valid']
  card: FormGroup;
  constructor(
    private crud :CrudService,
    private routes:Router
  ) {
    this.card=new FormGroup({
      name:new FormControl('',Validators.minLength(1)),
      bank:new FormControl('',Validators.minLength(1)),
      account:new FormControl('',Validators.minLength(1)),
      status:new FormControl('',Validators.minLength(1)),
      valid:new FormControl('',Validators.minLength(1))
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.card.value);
    const newcard:Card={
      name:this.card.value['name'],
      bank:this.card.value['bank'],
      account:this.card.value['account'],
      status:this.card.value['status'],
      valid:this.card.value['valid'],
      balance:0,
      transactions:[],
      email: Auth.auth().currentUser.email
    }
    this.crud.addCard(newcard)
    .then(response=>{
      console.log(response);
      this.routes.navigate(['/cards'])
    })
    .catch(error=>console.log(error));
  }

}
