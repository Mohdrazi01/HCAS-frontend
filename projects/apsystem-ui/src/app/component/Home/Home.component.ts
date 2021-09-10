import { HttpClient } from '@angular/common/http';
import { AppointmentUiService } from './../../core/services/appointmentUi.service';
import { AppointmentService } from '../../core/Service1/appointment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '@core/models/appointment';
import { AuthService } from '../../core/Service1/auth.service';
import { request } from 'http';
import { UserModel } from '@core/models/user-model';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  public allAppointments: Array<Appointment> = [];
  public tenearliest : Array<Appointment> = [];
  DoctorsandNurses:Array<UserModel> =[];
  HttpClient: any;

  constructor(private router: Router,private appointmentservice: AppointmentService,
    private appointmentUiService: AppointmentUiService,private authservice: AuthService) { }

  ngOnInit() {

    this.appointmentUiService.GetAppointmentList().subscribe(
      response=>{
        console.warn(response);
        for(var i =0;i<response.length;i++){
          this.allAppointments.push(response[i]);
        }
      }
    );

    this.authservice.apiV1AuthGetDoctorsandNursesGet$Json$Response().subscribe(
      response=> {
        console.warn(response);
         // tslint:disable-next-line: prefer-for-of
         for(var i = 0; i< response.body.length; i++){
           this.DoctorsandNurses.push(response.body[i]);
         }
      }
    );


  }





  login()
  {
    this.router.navigate(['./login']);
  }
  signup()
  {
    this.router.navigate(['./signup']);
  }


}
