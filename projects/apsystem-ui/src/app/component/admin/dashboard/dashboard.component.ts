import { Router } from '@angular/router';
import { UserModel } from './../../../core/models/user-model';
import { AuthService } from '@api';
import { Component, OnInit, Input} from '@angular/core';
import { createElementCssSelector } from '@angular/compiler';
import { TokenStorageService } from '@core/services/Token/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() public listofAppointments;
  isDoctor : boolean= true;
  FilteredDoctorsNurses : Array<UserModel>=[];
  DoctorsandNurses : Array<UserModel> = [];
  private _searchTerm: string;
  get searchTerm():string{
    return this._searchTerm;
  }
  set searchTerm(value:string){
    this._searchTerm = value;
    this.FilteredDoctorsNurses = this.FilterDoctorsNurses(value);
  }

  FilterDoctorsNurses(searchValue: string){

   return this.DoctorsandNurses.filter(docnNurse=>
    ( docnNurse.genderName.indexOf(searchValue) !== -1 ||
     docnNurse.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
     docnNurse.speciality.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1));

  }
    constructor(private authservice: AuthService,private router: Router ,
   private token: TokenStorageService) { }

  ngOnInit(): void {
    this.loggedinDoctor();
    this.FilteredDoctorsNurses = this.DoctorsandNurses;
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

  loggedinDoctor(){
    return this.token.isDoctorLogin;
  }


  //  DoctorsAplist(){
  //   this.router.navigate(['/bookingAppointment/']);
  //  }
}
