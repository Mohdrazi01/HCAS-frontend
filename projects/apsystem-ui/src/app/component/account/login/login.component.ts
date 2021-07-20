import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '@core/services/Token/token-storage.service';
import { AuthService } from '@api';
import { RegisterUserRequest } from '@core/models/register-user-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  regModel: RegisterUserRequest=new RegisterUserRequest();
  constructor(private router:Router,private token:TokenStorageService,private authService:AuthService) { }

  ngOnInit(): void {
  }

  login()
  {
    this.authService.apiV1AuthLoginPost$Json$Response({body:this.regModel}).subscribe()
    this.token.setToken('token');
    this.router.navigate(['./admin/dashboard']);
  }
  signup()
  {
    this.router.navigate(['./signup']);
  }
}
