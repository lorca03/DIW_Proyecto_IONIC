import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public settings:any = [];
  public monedaSeleccionada = '';

  constructor(private crudService: CrudService,) { }

  async ngOnInit() {
    this.settings = await this.crudService.getSetting();
    this.monedaSeleccionada = this.settings["Currency"];
  }

}
