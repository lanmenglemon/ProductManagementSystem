import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReauthGuard implements CanActivate {

  constructor(private _authService : AuthService, private _router : Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this._authService.checkUserStats()) {
        this._router.navigate(['/home']);
        return false;
      }
      else {
        return true;
      }
  }
}
