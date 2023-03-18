import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private router: Router, private active: ActivatedRoute, private Service: UserServiceService) { }

  user: User = {
    name : '',
    email: '',
    password: '',
    phoneNumber: '',
  }

  uId:any;
  message:any;
  error:boolean = false;


  ngOnInit(): void {
    this.uId = this.active.snapshot.paramMap.get('id')
    this.getUserById()
  }

  public getUserById() {
    this.Service.GetUserById(this.uId).subscribe(res => this.user=res)
  }

  updateUser() {
    this.Service.UpdateUser(this.uId, this.user).subscribe(res => {
      if(res == 'User updated!!') {
        this.router.navigate(['/admin/dashboard/users'])
      } else {
        this.error = true
        this.message = 'Failed to Update User!!!'
      }
    })
  }

}
