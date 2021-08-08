import { Router } from '@angular/router';
import { UserModel } from './../../../core/models/user-model';
import { AuthService } from '@api';
import { Component, OnInit } from '@angular/core';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   DoctorsandNurses : Array<UserModel> = [];
  constructor(private authservice: AuthService,private router: Router ) { }

  ngOnInit(): void {

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
  //  DoctorsAplist(){
  //   this.router.navigate(['/bookingAppointment/']);
  //  }
}
