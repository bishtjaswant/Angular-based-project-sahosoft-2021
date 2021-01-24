import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PostsComponent } from './posts/posts.component';
import { CoursesComponent } from './courses/courses.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
//import { EditpostComponent } from './posts/editpost/editpost.component';

@NgModule({
  declarations: [PostsComponent, CoursesComponent, AddpostComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
