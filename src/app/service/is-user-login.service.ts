import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsUserLoginService {

  constructor() { }

  IsUserLogin() {
    if( localStorage.getItem("sahosoft") !== null ){
        return localStorage.getItem('sahosoft')   ;
    }
    return null;

  }
}
