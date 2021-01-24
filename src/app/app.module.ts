import { StaticpagesModule } from './staticpages/staticpages.module';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactService } from './staticpages/contact-us/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    CoursesModule,
    UsersModule,
    StaticpagesModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
