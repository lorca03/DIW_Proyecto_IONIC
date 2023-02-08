import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatallecardPageRoutingModule } from './datallecard-routing.module';

import { DatallecardPage } from './datallecard.page';
import { AtrasModule } from '../modulosReutilizables/atrasModule/atras.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatallecardPageRoutingModule,
    AtrasModule
  ],
  declarations: [DatallecardPage]
})
export class DatallecardPageModule {}
