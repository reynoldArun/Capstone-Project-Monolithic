import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  user: User = new User()
  success:boolean = false
  message:any
  constructor(private Service:UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  CreateUser() {
    this.Service.CreateUser(this.user).subscribe(res => {
      if(res !== null) {
        this.message = 'User created Successfully!!'
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000);
        this.router.navigate(['/admin/dashboard/users'])
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
