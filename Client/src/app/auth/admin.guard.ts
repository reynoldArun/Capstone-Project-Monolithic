import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router, private auth:AuthServiceService) {}

  canActivate() {
    if(this.auth.isAdminLoggedIn()) {
      return true;
    }
    alert("You need to login as admin!!")
    this.router.navigate(['/account/admin'])
    return false;
  }
  
}
