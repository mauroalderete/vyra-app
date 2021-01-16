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

  private getSub: Subscription
  private addSub: Subscription

  constructor(
    private marcasService: MarcasService
  ) {
    this.loadInitialData()
  }

  ngOnDestroy(){
    this.getSub?.unsubscribe()
    this.addSub?.unsubscribe()
  }

  private loadInitialData(){
    this.getSub = this.marcasService.get().subscribe( marcas => {
      //mapeo

      let m : IMarca[] = marcas

      console.log('[MarcasStore::get] ok: ', m)
      this.marcas$.next( m )

    }, error => {
      console.error('[MarcasStore::get] ', error)
    } )
  }

  public add(marca: IMarca) : Observable<IMarca> {

    return new Observable( observer => {

      this.addSub = this.marcasService.add( marca ).subscribe( marca=>{
        let m : IMarca = marca
        let mm : IMarca[] = this.marcas$.getValue()
        mm.push(m)
        this.marcas$.next( mm )

        observer.next(m)
      }, error => {
        observer.error(error)
      } )

      return {
        unsubscribe(){
          this.addSub?.unsubscribe()
        }
      }
    } )
  }

  private updateStore(){
    this.marcasService.get().toPromise().then( marcas => {

    } )
  }
  
}
