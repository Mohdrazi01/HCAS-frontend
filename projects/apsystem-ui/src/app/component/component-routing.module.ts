import { AllUserAppointmentsComponent } from './userdashboard/users-mamagement-dashboard/all-user-appointments/all-user-appointments.component';
import { ChatComponent } from './chat/chat.component';
import { CompletedCancelledBoookingsComponent } from './bookings/completed-cancelled-boookings/completed-cancelled-boookings.component';
import { ConfirmedBookingsComponent } from './bookings/confirmed-bookings/confirmed-bookings.component';
import { ManageAppointmentsCrudComponent } from './appointments/manage-appointments-crud/manage-appointments-crud.component';
import { UsersMamagementDashboardComponent } from './userdashboard/users-mamagement-dashboard/users-mamagement-dashboard.component';
import { MyProfileComponent } from './account/signup/myprofile/my-profile/my-profile.component';

import { BookingsManagementComponent } from './bookings/bookings-management/bookings-management.component';
import { BookingAppointment } from './../../../../apsystem-api-client/src/lib/api/models/APSystem/Models.Bookings/booking-appointment';
import { SetAppointmentsComponent } from './appointments/set-appointments/set-appointments.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@shared/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {AuthGuard} from '@core/guard/auth.guard';
const routes: Routes = [
  {
    path: 'dashboard' , canActivateChild: [AuthGuard], component: DashboardComponent
   },
  {
    path: 'createAppointment', canActivateChild: [AuthGuard], component: SetAppointmentsComponent
  },
  {
     path: 'bookingAppointment/:userID', canActivateChild: [AuthGuard], component: BookingsManagementComponent
  },
  {
     path: 'userManagementDashboard', canActivateChild: [AuthGuard], component: UsersMamagementDashboardComponent
  },
  {
    path: 'manageAppointments', canActivateChild: [AuthGuard], component: ManageAppointmentsCrudComponent
  },
  {
    path: 'confirmedBookings', canActivateChild: [AuthGuard], component: ConfirmedBookingsComponent
  },
  {
    path: 'completedBookings', canActivateChild: [AuthGuard], component: CompletedCancelledBoookingsComponent
  },
  {
    path: 'chat', canActivateChild: [AuthGuard], component: ChatComponent
  },
  {
    path: 'userBookings', canActivateChild: [AuthGuard], component: AllUserAppointmentsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
