import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentlyLoggedUserName:string;
  currentlyLoggedUserId:number;

  constructor() { }

  ngOnInit(): void {

    if( localStorage.getItem("sahosoft") !== null ){
     this.currentlyLoggedUserName=JSON.parse(localStorage.sahosoft).firstName;
      this.currentlyLoggedUserId= JSON.parse(localStorage.sahosoft)._id;
    }
  }

}
