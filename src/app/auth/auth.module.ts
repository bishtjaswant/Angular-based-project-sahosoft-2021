import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [RegistrationComponent, LoginComponent, DashboardComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[RegistrationComponent,LoginComponent]
})
export class AuthModule { }
