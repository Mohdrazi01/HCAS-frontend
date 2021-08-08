import { AppointmentType } from '../../../core/models/appointment-type';
import { TokenStorageService } from './../../../core/services/Token/token-storage.service';
import { BookingModel } from './../../../core/models/booking-model';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingsService } from './../../../../../../apsystem-api-client/src/lib/api/services/bookings.service';
import { AppointmentModel } from './../../../core/models/Appointment-model';
import { AppointmentService } from './../../../../../../apsystem-api-client/src/lib/api/services/appointment.service';
import { AuthService } from './../../../../../../apsystem-api-client/src/lib/api/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '@core/models/user-model';
import { Appointment } from '@core/models/appointment';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.scss']
})
export class BookingsManagementComponent implements OnInit {
   public doctorandNurseID: number;
   public user: UserModel = new UserModel();
   public appointmentbyDocID: AppointmentModel = new AppointmentModel();
   listofAppointments: Array<Appointment> = [];
   selectedAppointment: Appointment = new Appointment();
   patientId: number;
   patientEmail: string;
   listofAppointmentTypes: Array<AppointmentType> = [];
   loading: boolean = true;

  constructor(private activeRoute: ActivatedRoute,private route: Router
    ,         private authservice: AuthService
    ,         private appointmentService: AppointmentService
    ,         private bookingservice: BookingsService
    ,         private formbuilder: FormBuilder
    ,         private token: TokenStorageService) { }


    bookingForm= this.formbuilder.group({
     phoneNumber: ['',Validators.required],
     problemDiscription: ['', Validators.required],
     appointmentTypeID: ['',Validators.required]
    });

  ngOnInit() {
    this.doctorandNurseID = Number(this.activeRoute.snapshot.params['userID']);
    this.appointmentbyDocID.doctorID = this.doctorandNurseID;
    this.getDoctorNurseDetails(this.doctorandNurseID);
    this.getAppointments(this.appointmentbyDocID);
    this.patientId = Number(this.token.getUserID());
    this.patientEmail = this.token.getUserEmail();
    this.getAppointmentType();
  }

  goBack(){
   this.route.navigate(['/dashboard']);
  }

  getDoctorNurseDetails(doctorandNurseID: number){
    this.authservice.apiV1AuthUserbyIdGet$Json$Response({userID: doctorandNurseID}).subscribe(
      response =>{
        console.warn(response);
        this.user.name = response.body.name;
        this.user.email = response.body.email;
        this.user.phoneNumber = response.body.phoneNumber;
        this.user.dateOfBirth = response.body.dateOfBirth;
        this.user.gmcNumber = response.body.gmcNumber;
        this.user.speciality = response.body.speciality;
        this.user.experience = response.body.experience;
        this.user.address = response.body.address;
        this.user.gender = response.body.gender;
        this.user.genderName = response.body.genderName;
        this.user.userID = response.body.userID;
        this.user.roleID = response.body.roleID;
        this.user.roleName = response.body.roleName;
        return this.user;
      });

  }

  getAppointments(appointmentbyDocID){
    this.appointmentService.apiV1AuthApbyDocIdPost$Json$Response({body:appointmentbyDocID}).subscribe(
      response=>{
          console.log(response);
          for(var i = 0; i< response.body.length;i++){
            this.listofAppointments.push(response.body[i]);
          }
      }
    );
  }

  getAppointmentType(){
    this.bookingservice.apiV1BookingGetAppointmentTypesGet$Json$Response().subscribe(
      response=>{
        // tslint:disable-next-line: prefer-for-of
        console.warn(response.body);
        for( let i = 0; i < response.body.length; i++){
        this.listofAppointmentTypes.push(response.body[i]);
        }
      }

    );
  }
  // tslint:disable-next-line: typedef
  callbookingsform(appointmemts){
    console.log(appointmemts);
    this.selectedAppointment = appointmemts;

  }

  createBooking(){
   let newBooking = new BookingModel();
   newBooking.patientID = this.patientId;
   newBooking.patientEmail = this.patientEmail;
   newBooking.doctorID = this.selectedAppointment.doctorID;
   newBooking.doctorEmail = this.selectedAppointment.email;
   newBooking.appointmentID = this.selectedAppointment.appointmentID;
   newBooking.phoneNumber = this.bookingForm.value.phoneNumber;
   newBooking.problemDiscription = this.bookingForm.value.problemDiscription;
   newBooking.appointmentTypeID = this.bookingForm.value.appointmentTypeID;

   if(this.bookingForm.valid){

     this.loading = true;
     this.bookingservice.apiV1BookingCreateBookingPost$Json$Response({body:newBooking}).subscribe(
       response => {
         //console.warn(response.body);
         this.bookingForm.reset();
         window.location.reload();
         alertify.success(response.body.apStatus);
         alertify.success('booking created successfully');
         return this.loading = false;
       }
     // tslint:disable-next-line: no-unused-expression
     ), (error: any) => {
      alertify.error(error);
      this.bookingForm.reset();
      return this.loading = false;
    };

   }
   else{
     alertify.error('Form is incomplete');
     return this.loading = false;
   }
  }


}
