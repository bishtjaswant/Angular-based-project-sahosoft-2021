import { IsUserLoginService } from './../../service/is-user-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActiveUser: boolean=false;
  currentlyLoggedUserName: string;
  currentlyLoggedUserId: number;

  constructor(
    private isUserLoginService:IsUserLoginService
  ) { }

  ngOnInit(): void {
    // check localstorage is set orr not

    if( this.isUserLoginService.IsUserLogin() !== null ){
      let data = this.isUserLoginService.IsUserLogin()
      this.isActiveUser=true;
      this.currentlyLoggedUserName=JSON.parse(data).firstName;
       this.currentlyLoggedUserId= JSON.parse(data)._id;
     }

  }

}
