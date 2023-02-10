import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public atras: string = 'home';
  public settings: string[] = ['Last name', 'Password', 'Email', 'Phone'];

  @ViewChild(IonModal) modal: IonModal | undefined;
  constructor(private UserService:UserService,private routes:Router) {}

  ngOnInit() {}
  logout() {
    this.UserService.logout()
    .then(()=>{
      this.routes.navigate(['/login'])
    })
    .catch(error=>console.log(error))
    console.log('fuera');
  }
}
