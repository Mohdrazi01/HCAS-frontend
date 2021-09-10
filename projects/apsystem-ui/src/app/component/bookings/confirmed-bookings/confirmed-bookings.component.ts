import { AppointmentStatus } from './../../../core/models/appointment-status';
import { BookingModel } from './../../../core/models/booking-model';
import { UserModel } from '@core/models/user-model';
import { AuthService } from '../../../core/Service1/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../../core/Service1/appointment.service';
import { BookingsService } from '../../../core/Service1/bookings.service';
import { FormBuilder } from '@angular/forms';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-confirmed-bookings',
  templateUrl: './confirmed-bookings.component.html',
  styleUrls: ['./confirmed-bookings.component.scss']
})
export class ConfirmedBookingsComponent implements OnInit {

  doctorID: number;
  listofbookings: Array<BookingModel> =[];
  listofUpComingBookings: Array<BookingModel> =[];



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
    this.getStatus();
    //this.GetupComingBookings(this.listofbookings);
  }


  GetBookings(doctorID){
    this.bookingservice.apiV1BookingGetBookingsbyDoctorIdGet$Json$Response({id:doctorID}).subscribe(
      response=>{
        console.warn(response);
        for(var i=0;i<response.body.length;i++){
          this.listofbookings.push(response.body[i]);
        }
         this.listofUpComingBookings = this.listofbookings.filter(m=>m.apStatus == 'Up-Comming');
      });

  }

  updateAp(e,appointments){
    console.warn(e.target.value);
    let updateBooking = new BookingModel();
    updateBooking.bookingID = appointments.bookingID;
    updateBooking.appointmentID = appointments.appointmentID;
    updateBooking.phoneNumber = appointments.phoneNumber;
    updateBooking.problemDiscription = appointments.problemDiscription;
    updateBooking.statusID = e.target.value;

    this.bookingservice.apiV1BookingUpdateBookingPut$Json$Response({id: updateBooking.bookingID, body: updateBooking}).subscribe(
      response=>{
        var index = this.listofUpComingBookings.findIndex(x=>x.bookingID == updateBooking.bookingID);
        this.listofUpComingBookings.splice(index,1);
         console.warn(response);
         alertify.success('Update successfull');

      });
  }

  getStatus(){
   this.bookingservice.apiV1BookingGetAppointmentStatusGet$Json$Response().subscribe(
    response=>{
      for(var i = 0; i< response.body.length;i++){
        this.listofAppointmentStatus.push(response.body[i]);
      }
    });
  }

}
