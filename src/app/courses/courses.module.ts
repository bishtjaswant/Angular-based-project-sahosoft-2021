import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseFeatureComponent } from './course-feature/course-feature.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseRecentComponent } from './course-recent/course-recent.component';
import { CourseCategoryComponent } from './course-category/course-category.component';


@NgModule({
  declarations: [CourseFeatureComponent, CourseListComponent, CourseDetailComponent, CourseRecentComponent, CourseCategoryComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],

  exports:[CourseFeatureComponent]
})
export class CoursesModule { }
