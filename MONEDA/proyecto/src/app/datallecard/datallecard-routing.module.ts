import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatallecardPage } from './datallecard.page';

const routes: Routes = [
  {
    path: '',
    component: DatallecardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatallecardPageRoutingModule {}
