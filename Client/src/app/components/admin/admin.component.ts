import { Router } from '@angular/router';
import { AdminServiceService } from './../../Services/admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Service: AdminServiceService, private router: Router) { }

  adminUsername: any = ''
  adminPass: any = ''
  error:boolean=false;
  message:any;


  ngOnInit(): void { }

  admin() {
    this.Service.GetAllAdmin().subscribe(data => {
      data.forEach((person: any) => {
        if (this.adminUsername == person.name && this.adminPass == person.password) {
          localStorage.setItem('token', 'admintoken')
          this.router.navigate(['/admin/dashboard'])
        } else {
          this.message = 'Failed to Login as Admin'
          this.error = true
          setTimeout(() => {
            this.error = false
            this.adminUsername = ''
            this.adminPass = ''
          }, 3000)
        }
      })
    })
  }

}


