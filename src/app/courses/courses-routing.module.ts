import { PagenotfoundComponent } from './../components/pagenotfound/pagenotfound.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'courses',component:CourseListComponent},
  {path:'course/:id',component:CourseDetailComponent},
  {path:'course-recent',component:CourseRecentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
