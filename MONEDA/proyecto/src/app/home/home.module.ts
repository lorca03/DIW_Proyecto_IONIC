import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,NavigationComponent,TransactionsComponent],
  exports:[NavigationComponent]
})
export class HomePageModule {}
