import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User()
  errorMessage=false
  message:any;

  constructor(private Service: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    if(this.user.name === '' || this.user.password === '' || this.user.email === '' || this.user.phoneNumber === '') {
      this.errorMessage= true
      this.message = 'Something went Wrong !!'
        setTimeout(() => {
          this.errorMessage= false
      }, 3000);
      return;
    } else {
      this.Service.CreateUser(this.user).subscribe(res => {
        if(res == null) {
          alert("failed to register")
        } else {
          this.errorMessage= true
          this.message = "Registered Succesfully!!!"
          setTimeout(() => {
            this.errorMessage= false
          }, 3000);
          this.router.navigate(['/account/login'])
        }
      })
    }
    
  }


}
