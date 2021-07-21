import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders;

  constructor( private _http:HttpClient ) { 
    this.headers = HTTP_OPTIONS.headers
  }

  public getUsers():Observable<any>{
    return this._http.get(`${BASE_URL}`,{ headers: this.headers }) 
  }  
}
