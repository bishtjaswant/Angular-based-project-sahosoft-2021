import { Contact } from './../../models/contact';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL='http://localhost:3000/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http:HttpClient
  ) { }


  sendContactData(data:Contact):Observable<any> {
    console.log( 'in service', data);

    return this.http.post<any>(URL, data,{
     headers:new HttpHeaders().append("Content-Type","application/json")
    });

  }
}
