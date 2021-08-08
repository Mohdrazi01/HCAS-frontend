import { GenderModel } from '@core/models/gender-model';
import { PassSupplierResponse } from './../../../../../../apsystem-api-client/src/lib/api/models/SampleCube/RFQ.Models.RFQ/pass-supplier-response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterUserRequest } from '@core/models/register-user-request';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@core/services/account.service';
import { RoleModel } from '@core/models/role-model';
import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userform:FormGroup;


  public listGender: Array<GenderModel> = [];
  public listRoles: Array<RoleModel> = [];
  isDoctor: boolean = false;
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder
    ,private route: ActivatedRoute
    ,private router: Router
    ,private accountService: AccountService)
    { }

  ngOnInit(): void {

    this.userform = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
      phonenumber: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      gender: ['', Validators.required],
      roleid: ['', Validators.required],
      gmcnumber: [''],
      speciality: [''],
      experience: [''],
      address : [''],
      checkbox: ['', Validators.required]
    });
    this.userform.get('roleid').valueChanges
    .subscribe(roleId => {
     const gmcNumber = this.userform.get('gmcnumber');
     if(roleId == 2 || roleId == 4){
      gmcNumber.setValidators(Validators.required);
     }else{
      gmcNumber.clearValidators();
     }
     gmcNumber.updateValueAndValidity();
    });


    this.accountService.gender().subscribe(
      data => {
         this.listGender = data;
      });

    this  .accountService.roles().subscribe(
        data => {
           this.listRoles = data;
        });


  }

  //get getForm() { return this.form.controls; }

  onSelect(e){
      console.warn(e.target.value);
  }
  onClick(){
    return this.loading = true;
  }

  onSelectRole(e){
    // tslint:disable-next-line: no-unused-expression
      if(e.target.value == 2 || e.target.value == 4){
        return this.isDoctor = true;

      }
      if(e.target.value == 1){
        return this.isDoctor = false;

      }


  }


 onSubmit()
 {

  let regModel = new RegisterUserRequest();
  regModel.name = this.userform.value.name;
  regModel.email = this.userform.value.email;
  regModel.password = this.userform.value.password;
  regModel.phoneNumber = this.userform.value.phonenumber;
  regModel.dateOfBirth = this.userform.value.dateofbirth;
  regModel.gender = this.userform.value.gender;
  regModel.roleID = this.userform.value.roleid;
  regModel.gmcNumber = this.userform.value.gmcnumber;
  regModel.speciality = this.userform.value.speciality;
  regModel.experience = this.userform.value.experience;
  regModel.address = this.userform.value.address;

  if (this.userform.valid)
  {
    this.accountService.register(regModel).subscribe(
      response=>{
         alertify.success(response);
         alertify.success('Registration Successful. Please verify your email address.. Before login.');
         this.userform.reset();
         return this.loading = false;
      }
    // tslint:disable-next-line: no-unused-expression
    ), (error: any) => {
      alertify.error(error);
      this.userform.reset();
      return this.loading = false;
    };
  }
  else
  {
    alertify.error("Form is incomplete");
    return this.loading = false;
  }
}
}
