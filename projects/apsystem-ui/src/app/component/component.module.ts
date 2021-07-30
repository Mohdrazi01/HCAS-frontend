import { EmailConfirmComponent } from './account/signup/email-Confirm/email-confirm/email-confirm.component';
import { AccountService } from '@core/services/account.service';
import { SetAppointmentsComponent } from './appointments/set-appointments/set-appointments.component';
import { BookingsManagementComponent } from './bookings/bookings-management/bookings-management.component';
import { BookingAppointment } from './../../../../apsystem-api-client/src/lib/api/models/APSystem/Models.Bookings/booking-appointment';
import { HomeComponent } from './Home/Home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ComponentRoutingModule } from './component-routing.module';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    BookingsManagementComponent,
    SetAppointmentsComponent,
    EmailConfirmComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentModule { }
