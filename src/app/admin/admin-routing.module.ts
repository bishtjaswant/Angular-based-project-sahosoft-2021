//import { EditpostComponent } from './posts/editpost/editpost.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { PostsComponent } from './posts/posts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsActiveGuard } from '../guards/is-active.guard';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent, canActivate:[IsActiveGuard]},
  {path:"posts",component:PostsComponent,canActivate:[IsActiveGuard]},
  {path:"addpost",component:AddpostComponent,canActivate:[IsActiveGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
