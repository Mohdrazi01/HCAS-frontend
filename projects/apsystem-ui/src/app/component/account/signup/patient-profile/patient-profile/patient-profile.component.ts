import { Component, OnInit } from '@angular/core';
import { UserModel } from './../../../../../core/models/user-model';
import { AccountService } from './../../../../../core/services/account.service';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../core/Service1/auth.service';
import { GenderModel } from '@core/models/gender-model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import * as alertify from 'alertifyjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {


  Updatedform:FormGroup;
 public userid: number;
 public user: UserModel = new UserModel();
 listGender: Array<GenderModel> = [];
 loading: boolean = false;


  constructor(private router: Router, private token: TokenStorageService, private accountservice: AccountService,
              private authservice: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getUserID();
    this.authservice.apiV1AuthUserbyIdGet$Json$Response({userID: this.userid}).subscribe(
      response =>{
        console.warn(response);
        this.Updatedform = this.formBuilder.group(
        {
          updatedName: [response.body.name, Validators.required],
          updatedEmail: [response.body.email, Validators.required ],
          updatedPhoneNumber: [response.body.phoneNumber, Validators.required],
          updatedDateOfBirth: [response.body.dateOfBirth.slice(0,10), Validators.required],
          updatedGenderID: [response.body.gender, Validators.required],
        });

      }
      );

    this.getgender();
  }


  getUserID(){
   return this.userid = Number(this.token.getUserID());
  }

  getgender(){
    this.accountservice.gender().subscribe(
      data => {
         this.listGender = data;
      });
  }

 onSubmit(){
   let updateUsermodel = new UserModel();
   updateUsermodel.name = this.Updatedform.value.updatedName;
   updateUsermodel.email = this.Updatedform.value.updatedEmail;
   updateUsermodel.phoneNumber = this.Updatedform.value.updatedPhoneNumber;
   updateUsermodel.dateOfBirth = this.Updatedform.value.updatedDateOfBirth;
   updateUsermodel.gender = this.Updatedform.value.updatedGenderID;

   if (this.Updatedform.valid)
  {
    this.authservice.apiV1AuthUpdateUserDetailsPost$Json$Response({id: this.userid, body: updateUsermodel}).subscribe(
      response =>{
         alertify.success('update successful');
      }
    // tslint:disable-next-line: no-unused-expression
    ), (error: any)=>{
      alertify.error(error);
      this.Updatedform.reset();
    };


  }
  else
  {
    alertify.error('Form is incomplete');
  }

 }

}

