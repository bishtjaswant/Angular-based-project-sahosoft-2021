import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage:string='';

  constructor(
    private form:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    // remove token
    localStorage.removeItem("sahosoft");

    this.setLoginFormControls();
  }

  setLoginFormControls() {
    this.loginForm= this.form.group({
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required]],
    });
  }

  enterLoginCredential() {
        this.authService.getLogin(this.loginForm.value)
        .subscribe(
          data=>{

            if (data.status) {
                  // save credential
                  localStorage.setItem("sahosoft",JSON.stringify(data.user));
                  //redirection to dashboard
                  this.router.navigate(['/dashboard']);
            } else{
              this.errorMessage= data.msg;
            }

          }
        )
  }

}
