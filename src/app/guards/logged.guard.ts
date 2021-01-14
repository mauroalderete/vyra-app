import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { Subscription } from 'rxjs'
import { LoginStore } from '../stores/login.store'

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate{

  private logged: boolean
  private subLogged: Subscription

  constructor(
    private router: Router,
    private loginStore: LoginStore
  ) {
    this.subLogged = this.loginStore.logged.subscribe( logged => {
      this.logged = logged
    } )
  }

  onNgDestroy(){
    this.subLogged?.unsubscribe()
  }

  canActivate(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      if(this.logged){
        resolve(true)
      } else {
        this.router.navigate(['/'])
        reject(false)
      }
    } )
  }
}
