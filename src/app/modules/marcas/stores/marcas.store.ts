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
  private delSub: Subscription
  private updateSub: Subscription

  constructor(
    private marcasService: MarcasService
  ) {
    this.loadInitialData()
  }

  ngOnDestroy(){
    this.getSub?.unsubscribe()
    this.addSub?.unsubscribe()
    this.delSub?.unsubscribe()
    this.updateSub?.unsubscribe()
  }

  private loadInitialData(){
    this.getSub = this.marcasService.get().subscribe( marcas => {

      let m : IMarca[] = marcas

      m.sort( (a,b)=> {
        return a.nombre.toUpperCase() < b.nombre.toUpperCase() ? -1:1
      })

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

        mm.sort( (a,b)=> {
          return a.nombre.toUpperCase() < b.nombre.toUpperCase() ? -1:1
        })

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

  public update(marca: IMarca) : Observable<IMarca> {

    return new Observable( observer => {

      this.updateSub = this.marcasService.update( marca ).subscribe( result=>{
        let updated : IMarca = result
        let index: number = this.marcas$.getValue().findIndex( m => m.marca == marca.marca )

        if( index >= 0){
          let marcas : IMarca[] = this.marcas$.getValue()

          marcas.splice(index,1,updated)

          marcas.sort( (a,b)=> {
            return a.nombre.toUpperCase() < b.nombre.toUpperCase() ? -1:1
          })

          this.marcas$.next( marcas )
        }

        observer.next(updated)
      }, error => {
        observer.error(error)
      } )

      return {
        unsubscribe(){
          this.updateSub?.unsubscribe()
        }
      }
    } )
  }

  public delete(marca: IMarca) : Observable<null>{
    return new Observable( observer => {

      this.delSub = this.marcasService.delete( marca ).subscribe( ()=>{
        let m : IMarca = marca

        let index: number = this.marcas$.getValue().indexOf( m )
        if( index >= 0){
          let mm : IMarca[] = this.marcas$.getValue()
          mm.splice(index,1)
          this.marcas$.next( mm )
        }
        
        observer.next()
      }, error => {
        observer.error(error)
      } )

      return {
        unsubscribe(){
          this.delSub?.unsubscribe()
        }
      }
    } )
  }

  private updateStore(){
    this.marcasService.get().toPromise().then( marcas => {

    } )
  }
  
}
