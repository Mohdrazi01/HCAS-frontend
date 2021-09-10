import { PatientProfileComponent } from './component/account/signup/patient-profile/patient-profile/patient-profile.component';
import { MyProfileComponent } from './component/account/signup/myprofile/my-profile/my-profile.component';
import { BookingsManagementComponent } from './component/bookings/bookings-management/bookings-management.component';
import { SetAppointmentsComponent } from './component/appointments/set-appointments/set-appointments.component';
import { EmailConfirmComponent } from './component/account/signup/email-Confirm/email-confirm/email-confirm.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './component/account/login/login.component';
import {SignupComponent} from './component/account/signup/signup.component';
import { HomeComponent } from './component/Home/Home.component';
const routes: Routes = [

{
  path: '',
  component: HomeComponent,
  data: {title: 'Home'},
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent,
  data: {title: 'Home'},
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  data: {title: 'Login'},
  pathMatch: 'full'
}
,
{
  path: 'signup',
  component: SignupComponent,
  data: {title: 'signup'},
  pathMatch: 'full'
},
{
  path: 'activate',
  component: EmailConfirmComponent,
  data: {title: 'EmailConfirm'},
  pathMatch: 'full'
},
{
  path: 'bookingAppointment/:userID',
  component: BookingsManagementComponent,
  data: {title: 'Bookings'},
  pathMatch: 'full'
},
{
  path: 'myprofile',
  component: MyProfileComponent,
  data: {title: 'MyProfile'},
  pathMatch: 'full'
},
{
  path: 'patientProfile',
  component: PatientProfileComponent,
  data: {title: 'PatientProfile'},
  pathMatch: 'full'
},
{
  path: '',
  loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
