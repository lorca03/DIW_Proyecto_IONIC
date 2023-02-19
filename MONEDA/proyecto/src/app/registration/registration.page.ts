import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user: FormGroup;
  constructor(
    private UserService:UserService,
    private routes:Router
    ) {
    this.user=new FormGroup({
      email:new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
      password:new FormControl('',Validators.minLength(8))
    })
   }

  ngOnInit() {
  }

 async onSubmit(){
    this.UserService.register(this.user.value)
    .then(response=>{
      console.log(response);
      this.routes.navigate(['/home'])
    })
    .catch(error=>console.log(error));
  }
}
