import { AllUserAppointmentsComponent } from './userdashboard/users-mamagement-dashboard/all-user-appointments/all-user-appointments.component';
import { ChatComponent } from './chat/chat.component';
import { CompletedCancelledBoookingsComponent } from './bookings/completed-cancelled-boookings/completed-cancelled-boookings.component';
import { ConfirmedBookingsComponent } from './bookings/confirmed-bookings/confirmed-bookings.component';
import { ManageAppointmentsCrudComponent } from './appointments/manage-appointments-crud/manage-appointments-crud.component';
import { PatientProfileComponent } from './account/signup/patient-profile/patient-profile/patient-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersMamagementDashboardComponent } from './userdashboard/users-mamagement-dashboard/users-mamagement-dashboard.component';
import { MyProfileComponent } from './account/signup/myprofile/my-profile/my-profile.component';
import { EmailConfirmComponent } from './account/signup/email-Confirm/email-confirm/email-confirm.component';
import { SetAppointmentsComponent } from './appointments/set-appointments/set-appointments.component';
import { BookingsManagementComponent } from './bookings/bookings-management/bookings-management.component';
import { HomeComponent } from './Home/Home.component';
import { NgModule } from '@angular/core';
import {ApiModule} from '@api';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ComponentRoutingModule } from './component-routing.module';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { environment } from '@environments/environment';




@NgModule({
  declarations: [
    BookingsManagementComponent,
    ChatComponent,
    AllUserAppointmentsComponent,
    ConfirmedBookingsComponent,
    CompletedCancelledBoookingsComponent,
    UsersMamagementDashboardComponent,
    ManageAppointmentsCrudComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SetAppointmentsComponent,
    EmailConfirmComponent,
    MyProfileComponent,
    PatientProfileComponent

  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    //ApiModule.forRoot({rootUrl: environment.apiBaseUrl})
  ]
})
export class ComponentModule { }
//export class AppModule { }
