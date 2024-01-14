import { Component, OnInit, Input , ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss','../modal/modal.component.scss'],
})
export class PerfilComponent implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;
  @Input() originalName: string = '';
  @Input () name :string=''
  constructor(
    private crudService: CrudService,
  ) { this.ngOnInit() }
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  async ngOnInit() {
    this.originalName = this.name;
  }
  cancel() {
    this.name = this.originalName;
    this.modal?.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal?.dismiss(this.name, 'confirm');
    this.crudService.updateSetting('Name', this.name);
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


}
