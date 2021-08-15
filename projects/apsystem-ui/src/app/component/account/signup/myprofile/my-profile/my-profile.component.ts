import { UserModel } from './../../../../../core/models/user-model';
import { AccountService } from './../../../../../core/services/account.service';
import { Component, inject, OnInit } from '@angular/core';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import { Router } from '@angular/router';
import { AuthService } from '@api';
import { GenderModel } from '@core/models/gender-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(private router: Router, private token: TokenStorageService, private accountservice: AccountService,
              private authservice: AuthService, private formBuilder: FormBuilder) { }



 public userid: number;
 public user: UserModel = new UserModel();
 listGender: Array<GenderModel> = [];
 loading: boolean = false;
 Updatedform: FormGroup;



  ngOnInit() {
    this.getUserID();
    this.authservice.apiV1AuthUserbyIdGet$Json$Response({userID: this.userid}).subscribe(
      response =>{
        var user = response.body;
      this.Updatedform = this.formBuilder.group({
          updatedName : [user.name],
          updatedEmail : [user.email],
          updatedPhoneNumber : [response.body.phoneNumber],
          updatedDateOfBirth : [response.body.dateOfBirth.slice(0,10)],
          updatedGenderID : [response.body.gender],
          updatedGmcNumber : [response.body.gmcNumber],
          updatedSpeciality : [response.body.speciality],
          updatedExperience : [response.body.experience],
          updatedAddress : [response.body.address]
      });
      });

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
   updateUsermodel.gmcNumber = this.Updatedform.value.updatedGmcNumber;
   updateUsermodel.speciality = this.Updatedform.value.updatedSpeciality;
   updateUsermodel.experience = this.Updatedform.value.updatedExperience;
   updateUsermodel.address = this.Updatedform.value.updatedAddress;

   if (this.Updatedform.valid)
  {
    this.authservice.apiV1AuthUpdateUserDetailsPost$Json$Response({id: this.userid, body: updateUsermodel}).subscribe(
      response =>{
         alertify.success('update successfull');

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
