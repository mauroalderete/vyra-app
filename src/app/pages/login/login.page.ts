import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ISession } from 'src/app/models/session.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup

  constructor(
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    let formBuilder = new FormBuilder()

    this.loginForm = formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  
  login(){

    let loadingPromise = this.loadingController.create({
      spinner: "bubbles",
      translucent: true,
      message: 'Iniciando sesion...',
      backdropDismiss: true
    })

    loadingPromise.then( loading =>{
      loading.present().then( () => {
        console.log('ready')
      } )

      loading.onDidDismiss().then( data => {
        console.log('dismiss: ', data)
      })

      let session: ISession = {
        user: (this.loginForm.value.user as string),
        password: (this.loginForm.value.password as string)
      }
    } )
    console.log('login')
  }
}
