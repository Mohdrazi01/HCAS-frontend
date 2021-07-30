import { Roles } from './../../models/enums/roles.enum';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const RoleName = 'role';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  signout()
  {
    window.localStorage.clear();
    this.router.navigate(['/signup']);
  }
  public setToken(token:string)
  {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

     // tslint:disable-next-line: typedef
    public setRole(roleid: number){
    switch (roleid){
        case 1:
        window.localStorage.setItem(RoleName,roleid.toString());
        break;
        case 2:
        window.localStorage.removeItem(RoleName);
        window.localStorage.setItem(RoleName,roleid.toString());
        break;
        case 3:
        window.localStorage.setItem(RoleName,roleid.toString());
        break;
        case 4:
        window.localStorage.setItem(RoleName,roleid.toString());
        break;
      }


    }

  public getRole(): string{
    return localStorage.getItem(RoleName);
  }

  public getToken(): string{
    return localStorage.getItem(TOKEN_KEY);
  }

  get isLogin(): boolean
  {
    if(this.getToken()!=null) return true;
    else return false;
  }

  get isDoctorLogin(): boolean
  {
    if(this.getToken()!=null && this.getRole()==="2") return true;
    else return false;
  }

}
