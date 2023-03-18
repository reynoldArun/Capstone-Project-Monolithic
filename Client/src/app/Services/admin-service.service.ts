import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  public GetAllAdmin() {
    return this.http.get<any>("http://localhost:8080/admin/all");
  }
  public CreateAdmin(admin:any) {
    return this.http.post("http://localhost:9000/add", admin, {responseType: 'text' as 'json'})
  }

}
