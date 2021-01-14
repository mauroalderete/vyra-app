import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginStore } from '../../stores/login.store'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private loginStore: LoginStore
  ) {}

  logout(){
    this.loginStore.logout().then( () => {
      this.router.navigate(['/'])
    } )
  }

}
