import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../../../core/services/Token/token-storage.service';
import { AppointmentService } from '../../../core/Service1/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '@core/models/appointment';
import { AppointmentModel } from '@core/models/Appointment-model';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-manage-appointments-crud',
  templateUrl: './manage-appointments-crud.component.html',
  styleUrls: ['./manage-appointments-crud.component.scss']
})
export class ManageAppointmentsCrudComponent implements OnInit {

  listofAppointments: Array<Appointment> = [];
  filteredAppointments: Array<Appointment> = [];
  public appointmentbyDocID: AppointmentModel = new AppointmentModel();
  selectedAppointment:Appointment = new Appointment();
  doctorId: number;
  private _searchDate:string;
  get searchDate():string{
   return this._searchDate;
  }
  set searchDate(value: string){
   this._searchDate = value;
   this.filteredAppointments = this.filterAppointments(value);
  }

  filterAppointments(value: string){
  return this.listofAppointments.filter(ap=>
    (ap.appointmentDate.toString().slice(8,10).indexOf(value)) !== -1);
  }
  constructor(private route: Router, private token: TokenStorageService
    , private appointmentService: AppointmentService) { }

  ngOnInit() {

    this.doctorId = Number(this.token.getUserID());
    this.filteredAppointments = this.listofAppointments;
    this.appointmentbyDocID.doctorID = this.doctorId;
    this.getAppointments(this.appointmentbyDocID);

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

  Delecteap(appointmemts){
    alert('Are you sure you want to delete this appointment.');
    this.selectedAppointment = appointmemts;
    this.appointmentService.apiV1AuthDeleteAppointmentDelete({id: this.selectedAppointment.appointmentID}).subscribe(
         response=>{
           var index = this.listofAppointments.findIndex(x=>x.appointmentID == this.selectedAppointment.appointmentID);
           this.listofAppointments.splice(index,1);
           alertify.success('Appointment Deleted Successfully.');
         }
      )
  }

}
