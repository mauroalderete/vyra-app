import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IMarca } from '../models/marca.model';
import { MarcasService } from "../services/marcas.service";

@Injectable({
  providedIn: 'root'
})
export class MarcasStore implements OnDestroy{

  private marcas$: BehaviorSubject<IMarca[]> = new BehaviorSubject([])
  public readonly marcas : Observable<IMarca[]> = this.marcas$.asObservable()

  private marcasSub: Subscription

  constructor(
    private marcasService: MarcasService
  ) {
    this.loadInitialData()
  }

  ngOnDestroy(){
    this.marcasSub?.unsubscribe()
  }

  private loadInitialData(){
    this.marcasSub = this.marcasService.get().subscribe( marcas => {
      //mapeo

      let m : IMarca[] = marcas

      console.log('[MarcasStore::get] ok: ', m)
      this.marcas$.next( m )

      // let todos = (<Object[]>res.json()).map((todo: any) =>
      //                   new Todo({id:todo.id, description:todo.description,completed: todo.completed}));

      // this._todos.next(List(todos));

    }, error => {
      console.error('[MarcasStore::get] ', error)
    } )
  }
  
}
