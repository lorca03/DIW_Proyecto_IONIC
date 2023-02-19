import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SettingsPageRoutingModule } from './settings-routing.module';

import { AtrasModule } from '../modulosReutilizables/atrasModule/atras.module';
import { ModalComponent } from './modal/modal.component';
import { SettingsPage } from './settings.page';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule,
    AtrasModule,
  ],
  exports:[
    ModalComponent
  ],
  declarations: [SettingsPage , ModalComponent, PerfilComponent]
})
export class SettingsPageModule {}
