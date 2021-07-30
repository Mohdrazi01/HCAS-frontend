import { AuthService } from '@api';
import { EmailModel } from './../../../../../core/models/email-model';
import { AccountService } from '@core/services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss']
})
export class EmailConfirmComponent implements OnInit {
  emailconfirmed: boolean = false;
  url: EmailModel = new EmailModel();

  constructor(
    private route: ActivatedRoute,
    private accountservice: AccountService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.url.emailActivationCode =  this.route.snapshot.queryParamMap.get('emailActivationCode');
    console.warn(this.url);
    this.confirmEnail();
  }

  // tslint:disable-next-line: typedef
   confirmEnail(){
  //   this.accountservice.emailConfirmation(this.url).subscribe(
  //      response=>{
  //        console.warn(response);
  //        alertify.success(response);
  //        this.emailconfirmed = true;
  //      },
  //      (error: any)=>{
  //         alertify.error(' Unable to confirm email ' + error.error.appError.description,1000);

  //      }

  //   );
// this.authservice.apiV1AuthEmailConfirmationPost$Json$Response(this.url).subscribe(
//         response => {
//           console.warn(response);
//               alertify.success(response);
//               this.emailconfirmed = true;
//              },
//              (error: any)=>{
//                 alertify('Unable to confirm email' + error);
//         }
//     )


  }

}
