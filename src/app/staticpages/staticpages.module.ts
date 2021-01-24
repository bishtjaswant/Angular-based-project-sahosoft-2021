import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticpagesRoutingModule } from './staticpages-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagesComponent } from './pages/pages.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [ContactUsComponent, PagesComponent, AboutUsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StaticpagesRoutingModule,
    HttpClientModule,
  ]
})
export class StaticpagesModule { }
