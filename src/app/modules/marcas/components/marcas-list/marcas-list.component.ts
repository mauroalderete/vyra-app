import { Component, OnInit } from '@angular/core';
import { MarcasStore } from '../../stores/marcas.store';

@Component({
  selector: 'app-marcas-list',
  templateUrl: './marcas-list.component.html',
  styleUrls: ['./marcas-list.component.scss'],
})
export class MarcasListComponent implements OnInit {

  constructor(
    private marcasStore: MarcasStore
  ) { }

  ngOnInit() {}

}
