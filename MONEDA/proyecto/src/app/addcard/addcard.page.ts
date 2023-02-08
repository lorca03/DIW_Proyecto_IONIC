import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.page.html',
  styleUrls: ['./addcard.page.scss'],
})
export class AddcardPage implements OnInit {

  public atras='cards'
  public adds=['Name','Bank','Account','Status','Valid']
  constructor() { }

  ngOnInit() {
  }

}
