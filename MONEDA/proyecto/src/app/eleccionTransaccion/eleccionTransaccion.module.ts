import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaccionPageRoutingModule } from './eleccionTransaccion-routing.module';

import { EleccionTransaccionPage } from './eleccionTransaccion.page';
import { AtrasModule } from '../modulosReutilizables/atrasModule/atras.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionPageRoutingModule,
    AtrasModule
  ],
  declarations: [EleccionTransaccionPage]
})
export class TransaccionPageModule {}
