import { AppointmentUiService } from './../../core/services/appointmentUi.service';
import { AppointmentService } from './../../../../../apsystem-api-client/src/lib/api/services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from '@core/models/appointment';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  public allAppointments: Array<Appointment> = [];
  public tenearliest : Array<Appointment> = [];

  constructor(private router: Router,private appointmentservice: AppointmentService,
    private appointmentUiService: AppointmentUiService) { }

  ngOnInit() {
    this.appointmentUiService.GetAppointmentList().subscribe(
      response=>{
        console.warn(response);
        for(var i =0;i<response.length;i++){
          this.allAppointments.push(response[i]);
        }
      }
    )

       this.tenearliest = this.allAppointments.filter(m=>m>Date.now);

  }
  login()
  {
    // this.authService.apiV1AuthLoginPost$Json$Response({body: this.regModel}).subscribe();
    // this.token.setToken('token');
    // this.router.navigate(['./admin/dashboard']);
    this.router.navigate(['./login']);
  }
  signup()
  {
    this.router.navigate(['./signup']);
  }



}
