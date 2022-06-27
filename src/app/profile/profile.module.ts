import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { EditComponent } from './edit/edit.component';
import { BookingComponent } from './booking/booking.component';
import { MainCOmpComponent } from './main-comp/main-comp.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SharedComponent } from './shared/shared.component';
import { ResetPasswordModule } from '../reset-password/reset-password.module';


@NgModule({
  declarations: [
    EditComponent,
    BookingComponent,
    MainCOmpComponent,
    PersonalDataComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ResetPasswordModule
  ]
})
export class ProfileModule { }
