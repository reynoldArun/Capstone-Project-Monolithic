import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private route: Router) { }

  isDisabled:boolean = true
  isToDisabled:boolean = true
  id:any
  userId:any
  logoutDisabled:boolean = false
  @Input() Length:any
  isAdmin:boolean = false;

 

  ngOnInit(): void {
    this.userId = localStorage.getItem('id')
    let CheckUrl =  this.route.url === '/account/login' || this.route.url === '/account/register' || this.route.url === '/account/admin'
    if(CheckUrl) {
      this.isDisabled = false;
      this.isToDisabled = false;
    }
    let checkToken = localStorage.getItem('token')
    if(checkToken !== null) {
      this.logoutDisabled = true
      this.isDisabled = false
    }
    if(checkToken === 'admintoken') {
      this.isAdmin = true
    }
  }

  logout() {
    localStorage.clear()
    this.logoutDisabled = false;
    this.isDisabled = true
    this.isAdmin = false
    this.route.navigate(['/home'])
  }

  Cart() {
    let checkToken = localStorage.getItem('token')
    if(checkToken === 'admintoken') {
      alert("Not Allowed")
    } else if(checkToken === null) {
      alert("Please login as user")
      this.route.navigate(['/account/login'])
    } else if(checkToken === 'usertoken') {
      this.route.navigate(['account/user/cart', this.userId])
    }
  }

}
