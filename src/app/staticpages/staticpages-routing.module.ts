import { PagesComponent } from './pages/pages.component';
import { PagenotfoundComponent } from './../components/pagenotfound/pagenotfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'pages/:slug', component:PagesComponent},
  {path:'contactus', component:ContactUsComponent},
  {path:'aboutus', component:AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
