import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '@core/services/Token/token-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(private tokenstorage: TokenStorageService) { }

  ngOnInit(): void {

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

}
