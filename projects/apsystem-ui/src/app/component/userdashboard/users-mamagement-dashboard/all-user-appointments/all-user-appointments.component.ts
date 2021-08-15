
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentStatus } from '@core/models/appointment-status';
import { AppointmentService } from 'projects/apsystem-api-client/src/lib/api/services/appointment.service';
import { BookingsService } from 'projects/apsystem-api-client/src/lib/api/services/bookings.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import { BookingModel } from '@core/models/booking-model';
import * as alertify from 'alertifyjs';
import { Appointment } from '@core/models/appointment';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-all-user-appointments',
  templateUrl: './all-user-appointments.component.html',
  styleUrls: ['./all-user-appointments.component.scss']
})
export class AllUserAppointmentsComponent implements OnInit {

  userID: number;
  listofbookings: Array<BookingModel> = [];
  listofUpComingBookings: Array<BookingModel> =[];
  selectedAppointment: Appointment = new Appointment();
  selectedbooking: BookingModel = new BookingModel();
  public listofAppointments: Array<Appointment> = [];
  listofAppointmentStatus : Array<AppointmentStatus> = [];
  //updatedForm: FormGroup;
  updatedForm = this.formbuilder.group({
    updatedAppointmentID:[],
    updatedPhoneNumber:[],
    updatedProblemDiscription:[]
  });

  constructor(private route: Router
    ,         private appointmentService: AppointmentService
    ,         private bookingservice: BookingsService
    ,         private formbuilder: FormBuilder
    ,         private token: TokenStorageService) { }

  ngOnInit() {
    this.userID = Number(this.token.getUserID());
    this.bookingservice.refreshNeeded$.subscribe(()=>{
      this.GetBookings(this.userID);
    });

    this.GetBookings(this.userID);
    //this.GetupComingBookings(this.listofbookings);

  }

  // tslint:disable-next-line: typedef
  async GetBookings(userID){
    this.bookingservice.apiV1BookingGetBookingsbyUserIdGet$Json$Response({bookingbyUserid:userID}).subscribe(
      response => {
        console.warn(response);
        // tslint:disable-next-line: prefer-for-of
        for(var i=0; i<response.body.length; i++){
          this.listofbookings.push(response.body[i]);
        }
        this.listofUpComingBookings = this.listofbookings.filter(m => m.apStatus.toLowerCase().startsWith("completed")||
        m.apStatus.toLowerCase().startsWith("cancelled"));
      });
  }


}
