import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtrasComponent } from './atras/atras.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports: [AtrasComponent],
  declarations: [AtrasComponent]
})
export class AtrasModule { }
