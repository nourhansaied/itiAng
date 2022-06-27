import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { ResetPasswordModule } from '../reset-password/reset-password.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ResetPasswordModule
  ]
})
export class AuthModule { }
