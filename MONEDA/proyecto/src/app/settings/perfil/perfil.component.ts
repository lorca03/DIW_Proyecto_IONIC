import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  @Input () name :string=''
  constructor() { }

  ngOnInit() {}

}
