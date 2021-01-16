import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { IMarca } from '../../models/marca.model';
import { MarcasStore } from '../../stores/marcas.store';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.scss'],
})
export class MarcasListComponent implements OnInit {

  delSub: Subscription

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private marcasStore: MarcasStore
  ) { }

  ngOnInit() {}

  delete(marca: IMarca){
    let loadingControl = this.loadingController.create({
      spinner: "bubbles",
      translucent: true,
      message: 'Guardando...',
      backdropDismiss: true
    })

    loadingControl.then( loading =>{
      loading.present().then()

      loading.onDidDismiss().then( data => {
        this.delSub?.unsubscribe()
      })

      this.delSub = this.marcasStore.delete( marca ).subscribe( () => {
        loading.dismiss().then()
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
