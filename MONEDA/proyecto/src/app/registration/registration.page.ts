import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  toast: any;
  user: FormGroup;
  constructor(
    private crudService: CrudService,
    private UserService:UserService,
    private routes:Router,
    private toastController: ToastController
    ) {
    this.user=new FormGroup({
      email:new FormControl('',Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
      password:new FormControl('',Validators.minLength(8))
    })
   }

  ngOnInit() {
  }

 async onSubmit(){
    this.UserService.register(this.user.value)
    .then(response=>{
      this.crudService.addUser();
      this.routes.navigate(['/home'])
    })
    .catch(error=>{
      let message = '';
      switch (error.code) {
        case 'auth/invalid-email':
          message = 'Correo electrónico inválido.';
          break;
        case 'auth/email-already-in-use':
          message = 'La dirección de correo electrónico ya está en uso.';
          break;
        case 'auth/weak-password':
          message = 'La contraseña no cumple con los requisitos mínimos de seguridad.';
          break;
        case 'auth/operation-not-allowed':
          message = 'La operación no está permitida. Por favor, contacta al soporte técnico.';
          break;
        case 'auth/network-request-failed':
          message = 'Error de red. Verifica tu conexión a Internet.';
          break;
        default:
          message = 'Error de autenticación: ' + error.message;
      }

      this.presentToast(message);
    }
    );
  }

  async presentToast(message: string) {
    this.toast = await this.toastController.create({
      message: message,
      duration: 0,
      position: 'top',
      color: 'danger',
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            this.toast.dismiss();
          },
        },
      ],
    });

    this.toast.present();
  }
}
