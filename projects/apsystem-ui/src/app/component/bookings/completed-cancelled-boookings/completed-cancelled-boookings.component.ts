import { AppointmentStatus } from './../../../core/models/appointment-status';
import { BookingModel } from './../../../core/models/booking-model';
import { UserModel } from '@core/models/user-model';
import { AuthService } from '@api';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'projects/apsystem-api-client/src/lib/api/services/appointment.service';
import { BookingsService } from 'projects/apsystem-api-client/src/lib/api/services/bookings.service';
import { FormBuilder } from '@angular/forms';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-completed-cancelled-boookings',
  templateUrl: './completed-cancelled-boookings.component.html',
  styleUrls: ['./completed-cancelled-boookings.component.scss']
})
export class CompletedCancelledBoookingsComponent implements OnInit {

  doctorID: number;
  listofbookings: Array<BookingModel> =[];
  CompletedorCancelled: Array<BookingModel> =[];

  listofAppointmentStatus : Array<AppointmentStatus> = [];
  constructor(private route: Router
    ,         private authservice: AuthService
    ,         private appointmentService: AppointmentService
    ,         private bookingservice: BookingsService
    ,         private formbuilder: FormBuilder
    ,         private token: TokenStorageService) { }

  ngOnInit() {
    this.doctorID = Number(this.token.getUserID());
    this.GetBookings(this.doctorID);
    //this.GetupComingBookings(this.listofbookings);
  }


  GetBookings(doctorID){
    this.bookingservice.apiV1BookingGetBookingsbyDoctorIdGet$Json$Response({id:doctorID}).subscribe(
      response=>{
        console.warn(response);
        for(var i=0;i<response.body.length;i++){
          this.listofbookings.push(response.body[i]);
        }
        this.CompletedorCancelled = this.listofbookings.filter(m=>m.apStatus.toLowerCase().startsWith("completed")||
        m.apStatus.toLowerCase().startsWith("cancel"));
      });

  }





}
