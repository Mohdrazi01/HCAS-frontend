import { Roles } from './../../models/enums/roles.enum';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_ID = 'user-id';
const USER_NAME = 'user-name';
const USER_EMAIL = 'user-email';
const RoleName = 'role';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private router: Router) { }

  async signout()
  {
    window.localStorage.clear();
   await window.localStorage.removeItem(USER_NAME);
   await this.router.navigate(['/home']);
  }

  public async setUserName(name: string){
    await window.localStorage.removeItem(USER_NAME);
    await window.localStorage.setItem(USER_NAME, name);
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
          window.localStorage.removeItem(RoleName);
          window.localStorage.setItem(RoleName, roleid.toString());
          break;
          case 2:
          window.localStorage.removeItem(RoleName);
          window.localStorage.setItem(RoleName, roleid.toString());
          break;
          case 3:
          window.localStorage.removeItem(RoleName);
          window.localStorage.setItem(RoleName, roleid.toString());
          break;
          case 4:
          window.localStorage.removeItem(RoleName);
          window.localStorage.setItem(RoleName, roleid.toString());
          break;
        }
    }

  public getRole(): string{
    return localStorage.getItem(RoleName);
  }

  public getToken(): string{
    return localStorage.getItem(TOKEN_KEY);
  }

  public setUserID(userid: number){
    window.localStorage.removeItem(USER_ID);
    window.localStorage.setItem(USER_ID,userid.toString());
  }
  public setUserEmail(userEmail: string){
    window.localStorage.removeItem(USER_EMAIL);
    window.localStorage.setItem(USER_EMAIL, userEmail);
  }

  public getUserID():string{
    return localStorage.getItem(USER_ID);
  }

  public getUserEmail():string{
    return localStorage.getItem(USER_EMAIL);
  }

  public getUserName():string{
    return localStorage.getItem(USER_NAME);
  }

  get isLogin(): boolean
  {
    if(this.getToken() != null) { return true; }
    else { return false; }
  }

  get isDoctorLogin(): boolean
  {
    if(this.getToken()!= null && this.getRole() === '2' || this.getToken()!= null && this.getRole() === '4') { return true; }
    else { return false; }
  }

  get isAdmin(): boolean
  {
    if(this.getToken()!= null && this.getRole() === '3'){ return true; }
    else { return false; }
  }

  get isPatientLogin(): boolean
  {
    if (this.getToken() != null && this.getRole() === '1') { return true; }
    else { return false; }
  }

}
