import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatsPageRoutingModule } from './stats-routing.module';

import { StatsPage } from './stats.page';
import { AtrasModule } from '../modulosReutilizables/atrasModule/atras.module';
import { MercadosService } from '../services/mercados.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatsPageRoutingModule,
    AtrasModule
  ],
  declarations: [StatsPage],
  providers:[MercadosService]
})
export class StatsPageModule {}
