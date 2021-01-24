import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';





@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm:FormGroup;
  datasaved:boolean=false;
  message:string;

  constructor(
    private form:FormBuilder,
    private authService:AuthService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.setFormControl();
  }

  setFormControl() : void {

    this.registrationForm= this.form.group(
      {
      firstName:['', [Validators.required] ],
      lastName:['', [Validators.required] ],
      email:['', [Validators.required,Validators.email] ],
      phone:['', [Validators.required, Validators.pattern("[0-9]{10}")] ],
      password:['', [Validators.required, Validators.minLength(4)] ],
      repassword:['', [Validators.required ] ],
      gender:['', [Validators.required] ],
      country:['', [Validators.required] ],
      terms:['', [Validators.required] ],
    } , {validator: matchPassword("password",'repassword') });

  }




  registrationSubmitForm() {

    this.authService.getRegister(this.registrationForm.value)
    .subscribe(

      data=>{
             if (data.status) {
              this.registrationForm.reset()
              console.log(data);
              this.datasaved=true;
              this.message='user registered';
             }
      }
    )
  }

}





function matchPassword(controlname: string, matchingcontrolname: string): any {
      return (group:FormGroup)=>{
         let control= group.controls[controlname];
         let matchingcontrol= group.controls[matchingcontrolname];

         if (matchingcontrol.errors && !matchingcontrol.errors['notMatched']) {
            return;
         }
         if ( matchingcontrol.value !== control.value) {
                 matchingcontrol.setErrors({notMatched:true});
         } else {
           matchingcontrol.setErrors(null);
         }
      }
}

