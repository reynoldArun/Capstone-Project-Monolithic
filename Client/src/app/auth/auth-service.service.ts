import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  isAdminLoggedIn() {
    return !!localStorage.getItem('token')
  }

  isUserLoggedIn() {
    return !!localStorage.getItem('token')
  }

}
