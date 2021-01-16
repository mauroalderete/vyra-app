import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from '@angular/common';
import { IMarca, Marca } from 'src/app/modules/marcas/models/marca.model';
import { MarcasStore } from 'src/app/modules/marcas/stores/marcas.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-marcas-detail',
  templateUrl: './marcas-detail.page.html',
  styleUrls: ['./marcas-detail.page.scss'],
})
export class MarcasDetailPage implements OnInit, OnDestroy {

  marca: IMarca
  sub: Subscription

  constructor(
    private location: Location,
    private marcasStore: MarcasStore
  ) {
  }

  ngOnInit() {
    if ('detail' in history.state){
      this.marca = history.state['detail']

      this.sub = this.marcasStore.marcas.subscribe( marcas => {
        let index = marcas.findIndex( m=> m.marca == this.marca.marca )
        if( index >= 0 ){
          this.marca = new Marca(marcas[index])
        } else {
          this.marca = null
        }
      })

    } else {
      this.location.back()
    }
  }

  ngOnDestroy(){
    this.sub?.unsubscribe()
  }

}
