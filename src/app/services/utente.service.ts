import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Utente } from '../utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private utente!:Utente;
  private baseURL:string='http://127.0.0.1:8080/NegozioOnline/api/utenteservice';
  private httpOptions = {
    headers: new HttpHeaders ({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE',
      'Content-Type' : 'application/json'
    })
  };

  constructor(private _http:HttpClient) { }

  getter():Utente {
    return this.utente;
  }

  setter(utente:Utente) {
    this.utente = utente;
  }

  createUtente(utente:Utente):Observable<any> {
    return this._http.post(this.baseURL+'/create', utente, this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('Create utente'))
    );
  }

  private errorHandler<T>(operation = 'Operazione', result?: T) {
    return (error:any):Observable<T> => {
      console.error(error);
      console.log(`${operation} falied: ${error.message}`);
      return of(result as T);
    }
  }

}
