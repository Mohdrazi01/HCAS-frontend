import { Injectable } from '@angular/core';

const TOKEN_KEY='auth-token';
const USER_KEY='auth-user'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signout()
  {
    window.localStorage.clear();
  }
  public setToken(token:string)
  {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string{
    return localStorage.getItem(TOKEN_KEY);
  }
  get isLogin():boolean
  {
    if(this.getToken()!=null) return true;
    else return false;
  }
}
