import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '@services/account.service';
import { AuthService } from '@api';
import { RegisterUserRequest } from '@core/models/register-user-request';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   form: FormGroup;
   loading = false;
   submitted = false;
   regModel: RegisterUserRequest=new RegisterUserRequest();
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private accountService: AccountService
  ) {
           // if(this.accountService.userValue){
           //   this.router.navigate(['/']);
           // }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.form.controls; }

  onSubmit() {

    this.regModel.address='aaa';
    this.regModel.email='adfa@aa.com';
    this.regModel.password='aaa';
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.authService.apiV1AuthSignupPost$Json$Response({body:this.regModel}).subscribe();
   // this.accountService.register(this.form.value)
    //alert( this.authService.apiV1AuthMessageGet$Json({body:this.regModel}).subscribe())

}
}
