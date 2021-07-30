import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  login()
  {
    // this.authService.apiV1AuthLoginPost$Json$Response({body: this.regModel}).subscribe();
    // this.token.setToken('token');
    // this.router.navigate(['./admin/dashboard']);
    this.router.navigate(['./login']);
  }
  signup()
  {
    this.router.navigate(['./signup']);
  }
}
