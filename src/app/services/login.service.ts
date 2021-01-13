import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { ISession } from '../models/session.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login( session: ISession ) : Observable<string> {
    return new Observable( observer => {
      console.log("[LoginService::login]Start")

      var headers = new HttpHeaders();

      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json')

      let sub = this.httpClient.post(
        'https://vyra.herokuapp.com/api/login',
        {
          username: session.user,
          password: session.password,
          uid: 'vyraproject'
        },
        {headers: headers}
      ).subscribe( response => {
        if ( 'token' in response ){
          observer.next(response['token'])
        } else {
          observer.error("Token no generado")
        }
      }, reason => {
        const httpErrorResponse: HttpErrorResponse = reason
        switch( httpErrorResponse.status ){
          case 400:{
            observer.error(`Conexión interrumpida. ${httpErrorResponse.error['error']}`)
            break
          }
          case 401:{
            observer.error(`Login invalido. ${httpErrorResponse.error['error']}`)
          }
          default:{
            observer.error(`Problema desconocido. Detalle del error: ${JSON.stringify(httpErrorResponse.error)}`)
          }
        }
      })

      return {
        unsubscribe(){
          console.log('[LoginService::login]Terminando')
          sub?.unsubscribe()
        }
      }

    } )
  }
}
