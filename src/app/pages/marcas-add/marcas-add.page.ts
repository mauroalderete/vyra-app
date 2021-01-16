import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
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
  saveSub: Subscription
  marcaToEdit: IMarca

  constructor(
    private location: Location,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private marcasStore: MarcasStore
  ) {
    this.marcaToEdit = null

    let formBuilder = new FormBuilder()

    this.addForm = formBuilder.group({
      nombre: new FormControl('', Validators.required),
      notas: new FormControl('')
    })
  }

  ngOnInit() {

    if ('edit' in history.state){
      this.marcaToEdit = history.state['edit']

      this.addForm.patchValue( {
        nombre: this.marcaToEdit.nombre,
        notas: this.marcaToEdit.notas
      })

    } else {
      this.marcaToEdit = null
    }
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
        this.saveSub?.unsubscribe()
      })

      let marca : IMarca = {
        marca: this.marcaToEdit? this.marcaToEdit.marca : 0,
        nombre: this.addForm.value.nombre,
        notas: this.addForm.value.notas
      }

      let call : any
      if( this.marcaToEdit ){
        call = this.marcasStore.update( marca )
      } else {
        call = this.marcasStore.add( marca )
      }

      this.saveSub = call.subscribe( marca => {
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
