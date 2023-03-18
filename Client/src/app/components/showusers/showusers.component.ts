import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  data:any;

  constructor(private Service: UserServiceService) { }

  ngOnInit(): void {
    this.GetAllUser()
    
  }

  public GetAllUser() {
    this.Service.GetAllUser().subscribe(res => this.data=res)
  }

  delete(id:any, index:any) {
    this.Service.DeleteUser(id).subscribe(() => {
      this.data.splice(index, 1);
    })
    
  }

}
