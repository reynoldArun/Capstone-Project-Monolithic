import { Admin } from './../../../Model/Admin';
import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.css']
})
export class CreateadminComponent implements OnInit {

  admin:Admin = new Admin();
  message:any
  success:boolean = false

  constructor(private Service: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  CreateAdmin() {
    this.Service.CreateAdmin(this.admin).subscribe(res => {
     
      if(res === 'Admin Created') {
        this.message = 'Admin created Successfully!!'
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000);
        
      } else {
        this.message = 'Something went Wrong Try again !!'
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000);
      }
    })
  }

}
