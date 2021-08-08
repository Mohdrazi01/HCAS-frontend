import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TokenStorageService} from '@core/services/Token/token-storage.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivateChild {
  constructor(private tokenService:TokenStorageService,private router:Router)
  {

  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.tokenService.isLogin)
      {
        return true;
      }
      else
      {
        this.router.navigate(['./login']);
        return false;
      }
  }

}
