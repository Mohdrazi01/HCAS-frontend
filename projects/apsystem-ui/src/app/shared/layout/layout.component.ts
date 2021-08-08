import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '@core/services/Token/token-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  Username:string;

  constructor(private tokenstorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.Username = this.tokenstorage.getUserName();
    this.loggedin();
    this.loggedinpatient();
    this.loggedinDoctor();
  }
  loggedin(){
    return this.tokenstorage.getToken();
  }
  // tslint:disable-next-line: typedef
  onLogout(){
    return this.tokenstorage.signout();
  }
  loggedinDoctor(){
    return  this.tokenstorage.isDoctorLogin;
  }

  loggedinpatient(){
    return this.tokenstorage.isPatientLogin;
  }

  name():string{
    return this.Username = this.tokenstorage.getUserName();
  }

  booking(){
   this.router.navigate(['/bookingAppointment']);
  }

}
