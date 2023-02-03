import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public atras:string='home'
  public settings:string[]=['Last name','Password','Email','Phone']

  @ViewChild(IonModal) modal: IonModal | undefined;
  constructor() {}

  ngOnInit() {
  }

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  apellidos: string='';
  password: string='';
  email: string='';
  phone: string='';
}

