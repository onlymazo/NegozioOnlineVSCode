import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Articolo } from '../articolo';

@Injectable({
  providedIn: 'root'
})
export class ArticoloService {
  private articolo!: Articolo;
  private baseUrl: string = 'http://127.0.0.1:8080/NegozioOnline/api/articoloservice';
  private httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,POST,PUT,DELETE,OPTIONS',
      'Content-Type' : 'application/json'
    })
  };

  constructor(private _http: HttpClient) { }

  getArticoli(): Observable<any> {
    return this._http.get(this.baseUrl+'/articoli',this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('Get articoli')));   
  }

  createArticolo(articolo:Articolo):Observable<any>{
    return this._http.post(this.baseUrl+'/create', articolo,this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('Create articoli')));
  }

  updateArticolo(articolo:Articolo):Observable<any>{
    return this._http.put(this.baseUrl+'/update',articolo,this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('Update articoli')));
  }

  deleteArticolo(id:number):Observable<any> {
    return this._http.delete(this.baseUrl+'/delete/'+id,this.httpOptions).pipe(
      map((response => response)),
      catchError(this.errorHandler<any>('Delete articoli')));
  }

  setter(articolo : Articolo) {
    this.articolo = articolo;
  }

  getter() {
    return this.articolo;
  }

  private errorHandler<T>(operation = 'Operazione', result?: T){
    return(error:any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
