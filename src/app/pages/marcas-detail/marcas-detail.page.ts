import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { IMarca } from 'src/app/modules/marcas/models/marca.model';

@Component({
  selector: 'page-marcas-detail',
  templateUrl: './marcas-detail.page.html',
  styleUrls: ['./marcas-detail.page.scss'],
})
export class MarcasDetailPage implements OnInit {

  marca: IMarca

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    if ('detail' in history.state){
      this.marca = history.state['detail']
    } else {
      this.location.back()
    }
  }

}
