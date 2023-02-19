import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public name: string = this.rutaActiva.snapshot.params['name'];
  public atras: string = 'home';
  public settings: string[] = ['Last name', 'Password', 'Email', 'Phone'];

  @ViewChild(IonModal) modal: IonModal | undefined;
  
  constructor(private userService: UserService, private rutaActiva: ActivatedRoute,private routes: Router) {}
  ngOnInit() {}

  logout() {
    this.userService.logout()
      .then(() => {
        this.routes.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
