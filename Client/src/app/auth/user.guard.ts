import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate() {
    if (this.auth.isUserLoggedIn()) {
      return true;
    }
    alert("you need to login as User")
    this.router.navigate(['/account/login'])
    return false;
  }
}


