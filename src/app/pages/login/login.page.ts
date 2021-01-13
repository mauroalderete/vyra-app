import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ISession } from 'src/app/models/session.model';
import { LoginStore } from 'src/app/stores/login.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  loginSubscription: Subscription = null

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private loginStore: LoginStore
  ) { }

  ngOnInit() {
    let formBuilder = new FormBuilder()

    this.loginForm = formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  login(){

    console.log('[Login::Login] Start')
    let loadingPromise = this.loadingController.create({
      spinner: "bubbles",
      translucent: true,
      message: 'Iniciando sesion...',
      backdropDismiss: true
    })

    loadingPromise.then( loading =>{
      loading.present().then( () => {
        console.log('[Login::Login] ready')
      } )

      loading.onDidDismiss().then( data => {
        console.log('[Login::Login] dismiss: ', data)
        this.loginSubscription?.unsubscribe()
      })

      let session: ISession = {
        user: (this.loginForm.value.user as string),
        password: (this.loginForm.value.password as string)
      }

      this.loginSubscription = this.loginStore.login(session).subscribe( token => {
        console.log('[Login::Login] Ok')
        console.log('[Login::Login] Redireccionadno...')
        loading.dismiss()
        //redireccionamiento
      }, async reason => {
        console.error('[Login::Login] ', reason)
        loading.dismiss()

        const alert = await this.alertController.create({
          header: 'Error',
          message: reason,
          buttons: ['OK']
        });
    
        await alert.present();
        //mostrar error
      }, async () => {
        console.error('[Login::Login] Completado')
        loading.dismiss()

        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Pasó algo raro... llamar a desarrollo',
          buttons: ['OK']
        });
    
        await alert.present();
        //mostrar otra clase de error
      } )
    } )
    console.log('[Login::Login] End')
  }
}
