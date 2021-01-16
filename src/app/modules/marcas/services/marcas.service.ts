import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { environment } from 'src/environments/environment';

import { IMarca } from '../models/marca.model'
import { LoginStore  } from "../../../stores/login.store";

@Injectable({
  providedIn: 'root'
})
export class MarcasService implements OnInit, OnDestroy{

  token : string
  tokenSub: Subscription

  constructor(
    private httpClient: HttpClient,
    private loginStore: LoginStore
  ) { }

  ngOnInit() {
    this.tokenSub = this.loginStore.token.subscribe( token => {
      this.token = token
    } )
  }

  ngOnDestroy(){
    this.tokenSub.unsubscribe()
  }

  get() : Observable<any>
  get(marca?: number | IMarca) : Observable<any>{
    
    console.log('[MarcasService::get] ', marca)

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.token
    });

    return this.httpClient.get(`${environment.API_URL}/marcas${marca? (marca['marca']? marca['marca'] : marca) : ''}`, {headers: headers})
  }

}
