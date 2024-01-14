import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: FormGroup;
  toast: any;
  constructor(
    private UserService: UserService,
    private routes: Router,
    private toastController: ToastController
  ) {
    this.user = new FormGroup({
      email: new FormControl(
        '',
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ),
      password: new FormControl('', Validators.minLength(8)),
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.UserService.login(this.user.value)
      .then((response) => {
        this.routes.navigate(['/home']);
      })
      .catch((error) => {
        let message = '';
        switch (error.code) {
          case 'auth/invalid-email':
            message = 'Correo electrónico inválido.';
            break;
          case 'auth/user-not-found':
            message = 'Usuario no encontrado. Verifica tus credenciales.';
            break;
          case 'auth/wrong-password':
            message = 'Contraseña incorrecta. Inténtalo de nuevo.';
            break;
          case 'auth/user-disabled':
            message = 'Esta cuenta de usuario ha sido desactivada.';
            break;
          default:
            message = 'Error de autenticación: ' + error.message;
        }

        this.presentToast(message);
      });
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
