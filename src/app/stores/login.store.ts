import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISession } from '../models/session.model';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginStore {

  private token$: BehaviorSubject<string> = new BehaviorSubject('')
  public readonly token: Observable<string> = this.token$.asObservable()

  private logged$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public readonly logged: Observable<boolean> = this.logged$.asObservable()

  constructor(
    private loginService: LoginService
  ) { }

  login( session: ISession ){
    return new Observable( observer => {
      console.log('Llamada al servicio')

      this.loginService.login( session ).subscribe( token => {

        observer.next(token)

      }, reason => {
        observer.error(reason)
      } )

      return {
        unsubscribe(){
          console.log('[loginStore::login] Terminando')
        }
      }
    } )
  }
}
