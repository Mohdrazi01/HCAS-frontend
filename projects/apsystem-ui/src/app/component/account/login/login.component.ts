import { AuthService } from '@api';
import { AuthResponse } from './../../../../../../apsystem-api-client/src/lib/api/models/APSystem/Models.Auth/auth-response';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import { FormBuilder, Validators, FormGroup, NgForm} from '@angular/forms';
import { AccountService } from '@core/services/account.service';
import { throwError } from 'rxjs';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forms: FormGroup;
  loading = false;
  submitted = false;
  //forgotpasswordform: FormGroup;


   constructor(private router: Router,private token: TokenStorageService,private accountService: AccountService,
               private formBuilder: FormBuilder, private authService:AuthService) { }

   ngOnInit(): void {

  }


  // tslint:disable-next-line: typedef
 async onLogin (loginForm: NgForm){

     this.accountService.login(loginForm.value).subscribe(
     (response: AuthResponse) => {
       console.warn(response);
       var user = response;
       if (user.success === true) {
         alertify.success('Welcome, you are logged in');
         this.token.setToken(user.access_Token);
         this.token.setRole(user.roleId);
         this.token.setUserID(user.userId);
         this.token.setUserName(user.fullName);
         this.token.setUserEmail(user.userName);
         this.router.navigate(['/dashboard']);
       }
       if (user.success === false) {
         this.router.navigate(['/login']);
       }
     },
     error => {
       loginForm.reset('');
       alertify.error('Error Occured: ' + error.error.appError.message);
     });
   }
}
