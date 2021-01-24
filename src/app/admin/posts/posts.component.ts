import { Router } from '@angular/router';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public allposts:Post[]=[];
  msg: any;

  constructor(
    private postService:PostService,
    private route:Router,
  ) { }

  ngOnInit(): void {
    this.fetchAllPost();
  }


  fetchAllPost() {
    this.postService.getPost()
    .subscribe(
      data=>{
         if (data['status']===true) {
           this.allposts=data['posts'];
         }
      }
    );

  }



  deletepost(deleteid:number, i:number) {

    // console.log(deleteid, i );return;

    this.postService.deletePost(deleteid)
    .subscribe(
      data=>{
         console.log(data);
           if (data.status) {
             this.allposts.splice(i, 1);
             this.route.navigate(['/posts']);
             this.fetchAllPost();
           }

      }
    );
  }

}
