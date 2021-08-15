import { AppointmentModel } from './../../../core/models/Appointment-model';
import { AppointmentUiService } from './../../../core/services/appointmentUi.service';
import { TokenStorageService } from './../../../core/services/Token/token-storage.service';
import { SlotModel } from './../../../core/models/Slot-model';
import { AppointmentService } from './../../../../../../apsystem-api-client/src/lib/api/services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-set-appointments',
  templateUrl: './set-appointments.component.html',
  styleUrls: ['./set-appointments.component.scss']
})
export class SetAppointmentsComponent implements OnInit {

  appointmentform = this.formBuilder.group({
  appointmentDate : ['', Validators.required]
  });

  public listOfSlots : Array<SlotModel>= [];
  public listofOneFourhtList : Array<SlotModel> = [];
  public listofTwoFourhtList : Array<SlotModel> = [];
  public listofThreeFourhtList : Array<SlotModel> = [];
  public listofRemeaning : Array<SlotModel> = [];
  public slectedSlots: Array<number> = [];

  loading: boolean = false;

  isLessthanhalf = true;

  constructor(private appointmentService: AppointmentService
    ,private router: Router, private tokenService: TokenStorageService
              ,private appointmentUiService : AppointmentUiService
              ,private formBuilder: FormBuilder) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    this.appointmentUiService.GetAppointmentSlots().subscribe(
      data=>{
              this.listOfSlots = data;
              this.oneFoutrhList();
      }
    );

  }
  oneFoutrhList(){

    // tslint:disable-next-line: prefer-const
    var onefourth = Math.ceil(this.listOfSlots.length/4);
    var twofourth = Math.ceil(this.listOfSlots.length/2);
    var threefourth = twofourth + onefourth;
    var last = twofourth + twofourth;
    let leftSide = this.listOfSlots.slice(0,onefourth);
    let middleleft = this.listOfSlots.slice(onefourth,twofourth);
    let firstright = this.listOfSlots.slice(twofourth,threefourth);
    let farRight = this.listOfSlots.slice(threefourth,last);
    this.listofOneFourhtList  = leftSide;
    this.listofTwoFourhtList = middleleft;
    this.listofThreeFourhtList = firstright;
    this.listofRemeaning = farRight;
  }
  // tslint:disable-next-line: typedef
  onSelectSlot(e: any){
    if(e.target.click)
    {
      const index = this.slectedSlots.indexOf(e.target.value);
      if(index >= 0){
        this.slectedSlots.splice(index,1);
        document.getElementById(e.target.value).style.color = 'white';

      }else{
      this.slectedSlots.push(e.target.value);
      document.getElementById(e.target.value).style.color = 'red';
      console.warn('Checked ' + this.slectedSlots);
      }
    }
    console.warn('final ' + this.slectedSlots)

  }

  onClick(){
    return this.loading = true;
  }


  onReset(){

   for(var i=0; i <= this.slectedSlots.length-1; i++){
    document.getElementById(this.slectedSlots[i].toString()).style.color = 'white';

   }
   this.slectedSlots.length =0;
  }

  onSubmit(){
     let appointmentModel = new AppointmentModel();
     appointmentModel.doctorID =  Number(this.tokenService.getUserID());
     appointmentModel.appointmentDate = this.appointmentform.value.appointmentDate;
     if(this.slectedSlots.length ===0){
        alertify.error('Appointment slots cannot be empty!!.');
     }else{
      appointmentModel.appointmentTimeSlotsArray = this.slectedSlots;
     }

    //  if(this.appointmentform.valid){
    //   this.appointmentUiService.CreateNewAppointment(appointmentModel).subscribe(
    //     response=>{
    //       alertify.success(response);
    //       this.appointmentform.reset();

    //     }
    //   ),error=>{
    //     alertify.error(error);
    //   }

    //  }
    //  else{
    //    alertify.error("Form is incomplete!!");
    // }
     if(this.appointmentform.valid && this.slectedSlots.length !==0){
     this.appointmentService.apiV1AuthCreateApPost$Json$Response({body:appointmentModel}).subscribe(
      (response:any)=>{
              alertify.success("Success, your appointmemts are created")
              this.appointmentform.reset();

             }
    // tslint:disable-next-line: no-unused-expression
    ),(error: any)=>{
           alertify.error(error);
         }
        }
        else{
              alertify.warning("Form is incomplete!!");
           }

  }

   goBack(){
    this.router.navigate(['/dashboard']);
   }

}
