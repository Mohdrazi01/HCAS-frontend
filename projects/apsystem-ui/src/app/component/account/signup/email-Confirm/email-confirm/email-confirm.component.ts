import { AuthService } from '../../../../../core/Service1/auth.service';
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
  emailActivationCode: string;

  constructor(
    private route: ActivatedRoute,
    private accountservice: AccountService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this. emailActivationCode =  this.route.snapshot.queryParamMap.get('emailActivationCode');
    console.warn(this. emailActivationCode);
    this.confirmEnail();
  }

   confirmEnail(){

    // this.accountservice.emailConfirmation(this.emailActivationCode).subscribe(
    //    response => {
    //      console.warn(response);
    //      alertify.success(response);
    //      this.emailconfirmed = true;
    //    },
    //    (error: any) => {
    //       alertify.error(' Unable to confirm email ' + error.error.appError.description, 1000);

    //    }

    // );


    this.authservice.apiV1AuthEmailConfirmationPost$Json$Response({emailActivationCode: this.emailActivationCode}).subscribe(
            (response: any) => {
              console.warn(response);
              alertify.success(response.body);
              this.emailconfirmed = true;
                },
                (error: any) => {
                    alertify('Unable to confirm email' + error);
            }
        );


      }

}
