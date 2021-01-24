import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm:FormGroup;

  constructor(
    private contactService:ContactService,
    private builder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.contactForm = this.builder.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required,Validators.pattern("[0-9]{10}")]],
      msg:['', [Validators.required]],
    });

  }

  public submitContactData() {

         this.contactService.sendContactData(this.contactForm.value)
         .subscribe(
           data=>{
             console.log(data)

                      if(data.status){
                            // reset form
                        this.contactForm.reset();
                        alert("Thank you for your feedback");
                        return false;
                      }
            }
         )
  }

}
