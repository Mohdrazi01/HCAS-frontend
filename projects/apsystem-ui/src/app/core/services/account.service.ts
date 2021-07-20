import { Observable } from 'rxjs';
import { RegisterUserRequest } from '@core/models/register-user-request';
import { RegisterUserResponse } from '@core/models/register-user-response';
import { Injectable } from '@angular/core';
import { AuthService } from '@api';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private authService: AuthService
  ) {}

  register(registerUser: RegisterUserRequest):Observable<RegisterUserResponse> {
    return this.authService.apiV1AuthSignupPost$Json$Response({body:registerUser});
  }
}


