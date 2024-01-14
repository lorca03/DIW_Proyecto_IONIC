import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { CrudService } from '../../services/crud.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  @ViewChild(IonModal) modal: IonModal | undefined;
  public settings: any = [];
  public currencys: string[] = ['EUR', 'USD', 'HKD', 'GBP', 'CHF', 'AUD'];
  constructor(
    private crudService: CrudService,
    private userService: UserService
  ) {}

  ngOnDestroy(): void {}

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  @Input() setting: string = '';
  variable: string = '';
  ngOnInit() {}

  async onModalDidPresent() {
    this.settings = await this.crudService.getSetting();
    this.variable = this.settings[this.setting];
  }
  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal?.dismiss(this.variable, 'confirm');
    this.crudService.updateSetting(this.setting, this.variable);
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
