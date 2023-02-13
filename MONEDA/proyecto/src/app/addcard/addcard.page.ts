import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';

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
    private crud :CrudService
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
    
    // this.crud.addCard(this.card.value)
    // .then(response=>{
    //   console.log(response);
    //   //this.routes.navigate(['/home'])
    // })
    // .catch(error=>console.log(error));
  }

}
