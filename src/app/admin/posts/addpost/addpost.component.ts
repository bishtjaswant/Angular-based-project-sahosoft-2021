import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from './../post.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  public postForm:FormGroup;
  public msg:string='';
  public fileToUpload:File;
  public postPreviewImage:any ="/assets/images/uploadyourown.png";
  postSaved: boolean=false;
  constructor(
    private router:Router,
    private postService:PostService,
    private form:FormBuilder
  ) { }

  ngOnInit(): void {

    this.setPostFormControls();

  }


  setPostFormControls() {
    this.postForm= this.form.group({
      title:['',[Validators.required]],
      full_desc:['',[Validators.required]],
      author:['',[Validators.required]],
        });

  }

  handleFileInput(file:FileList) {
       this.fileToUpload =  file.item(0);
       let filereader= new FileReader();

       filereader.onload= (e) => {
          this.postPreviewImage= e.target.result;
       }

       filereader.readAsDataURL(this.fileToUpload);

      //  console.log(this.fileToUpload);

  }

  addPost() {
       this.postService.addPost(this.postForm.value,this.fileToUpload)
       .subscribe(
         response => {
                 console.log(response);
                 if (response.status) {
                   this.postSaved=true;
                       this.postForm.reset();
                      this.msg=response.msg;
                 }

         }
       )
  }

  cancelPost( ) {
    this.router.navigate(['/posts']);
  }
}
