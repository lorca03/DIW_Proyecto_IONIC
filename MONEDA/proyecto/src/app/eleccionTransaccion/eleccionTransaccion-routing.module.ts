import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleccionTransaccionPage } from './eleccionTransaccion.page';

const routes: Routes = [
  {
    path: '',
    component: EleccionTransaccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaccionPageRoutingModule {}
