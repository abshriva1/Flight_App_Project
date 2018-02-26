import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuardComponent implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('Can Activate invoked')
    const accessToken1 = localStorage.getItem('access_token');
    if (accessToken1) {
      return true;
    };
    this._router.navigate(['/']);
    
    return false;
    
  }
}
