import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  onSubmit(){
    this.UserService.login(this.user.value)
    .then(response=>{
      console.log(response);
      this.routes.navigate(['/home'])
    })
    .catch(error=>console.log(error));
  }

}
