import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit,OnDestroy {
  @ViewChild(IonModal) modal: IonModal | undefined;
  constructor() {}
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  @Input() setting: string = '';
  variable:string='';
  ngOnInit() {}

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal?.dismiss(this.variable, 'confirm');
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
