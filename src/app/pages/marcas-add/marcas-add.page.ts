import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';
import { IMarca } from 'src/app/modules/marcas/models/marca.model';
import { MarcasStore } from 'src/app/modules/marcas/stores/marcas.store';

@Component({
  selector: 'page-marcas-add',
  templateUrl: './marcas-add.page.html',
  styleUrls: ['./marcas-add.page.scss'],
})
export class MarcasAddPage implements OnInit {

  addForm: FormGroup
  addSub: Subscription

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private marcasStore: MarcasStore
  ) {
    let formBuilder = new FormBuilder()

    this.addForm = formBuilder.group({
      nombre: new FormControl('', Validators.required),
      notas: new FormControl('')
    })
  }

  ngOnInit() {
  }

  save(){
    let loadingControl = this.loadingController.create({
      spinner: "bubbles",
      translucent: true,
      message: 'Guardando...',
      backdropDismiss: true
    })

    loadingControl.then( loading =>{
      loading.present().then()

      loading.onDidDismiss().then( data => {
        this.addSub?.unsubscribe()
      })

      let marca : IMarca = {
        marca: 0,
        nombre: this.addForm.value.nombre,
        notas: this.addForm.value.notas
      }

      this.addSub = this.marcasStore.add( marca ).subscribe( marca => {
        loading.dismiss().then( ()=> {
          this.location.back()
        })
      }, async error => {
        console.error('[Login::Login] ', error)
        loading.dismiss()

        const alert = await this.alertController.create({
          header: 'Error',
          message: error,
          buttons: ['OK']
        });
    
        await alert.present();
      }, async () => {
        loading.dismiss()

        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Pasó algo raro... llamar a desarrollo',
          buttons: ['OK']
        });
    
        await alert.present();
      } )
    } )

  }
}
