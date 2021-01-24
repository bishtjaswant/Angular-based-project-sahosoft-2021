import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(
    private http:HttpClient
  ) { }



  addPost(postdata:Post, fileToUpload:File):Observable<any> {

      const postformdata:FormData = new FormData();
     postformdata.append('title',postdata.title);
      postformdata.append('full_desc',postdata.full_desc);
      postformdata.append('author',postdata.author);
      postformdata.append('image',fileToUpload);

      console.log(postformdata);


    return this.http.post(`http://localhost:3000/api/post/addpost`,postformdata );
  }

  getPost(): Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:3000/api/post/all",{
      headers:new HttpHeaders().append('Content-Type','application/json')
    });

  }

  deletePost(deleteid:number) :Observable<any> {
     const url = `http://localhost:3000/api/post/delete/${deleteid}`;
    return this.http.delete(url, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });



  }



}
