import { Component, OnInit } from '@angular/core';
import { IMarca } from 'src/app/modules/marcas/models/marca.model';
import { Router  } from "@angular/router";

@Component({
  selector: 'page-marcas-list',
  templateUrl: './marcas-list.page.html',
  styleUrls: ['./marcas-list.page.scss'],
})
export class MarcasListPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toEdit(marca: IMarca){
    this.router.navigate(['/marcas-form'], {state: {edit: marca}})
  }

  toSelect(marca: IMarca){
    console.info('Marca seleccionada: ', marca)
  }

}
