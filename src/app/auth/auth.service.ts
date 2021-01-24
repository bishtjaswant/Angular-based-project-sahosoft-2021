import { Observable } from 'rxjs';
import { Users } from './users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url="http://localhost:3000/api";
  constructor(
    private http:HttpClient
  ) { }

  /**
   * getRegister
   */
  public getRegister(data:Users):Observable<any> {
         return this.http.post<any>(`${this.url}/user`,data,{
           headers:new HttpHeaders().append("Content-Type","application/json")
         });
  }



  getLogin(data: Users) {
    return this.http.post<any>(`${this.url}/user/login`,data,{
      headers:new HttpHeaders().append("Content-Type","application/json")
    });

  }


}
