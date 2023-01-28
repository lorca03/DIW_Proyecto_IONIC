import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaccionPageRoutingModule } from './eleccionTransaccion-routing.module';

import { EleccionTransaccionPage } from './eleccionTransaccion.page';
import { AtrasComponent } from '../mycomponents/atras/atras.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionPageRoutingModule
  ],
  declarations: [EleccionTransaccionPage,AtrasComponent]
})
export class TransaccionPageModule {}
