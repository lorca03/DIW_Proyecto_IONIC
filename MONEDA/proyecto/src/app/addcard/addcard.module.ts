import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcardPageRoutingModule } from './addcard-routing.module';

import { AddcardPage } from './addcard.page';
import { AtrasModule } from '../modulosReutilizables/atrasModule/atras.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcardPageRoutingModule,
    AtrasModule
  ],
  declarations: [AddcardPage]
})
export class AddcardPageModule {}
