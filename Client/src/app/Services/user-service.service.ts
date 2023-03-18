import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  // (micro service - cors error need to fix it)
  public CreateUser(user:any) {
    return this.http.post("http://localhost:9001/add", user, {responseType: 'text' as 'json'})
  }

  public GetAllUser() {
    return this.http.get<any>("http://localhost:8080/user/all")
  }

  public DeleteUser(id:any) {
    return this.http.delete("http://localhost:9001/delete/"+id, {responseType: 'text' as 'json'})
  }

  public GetUserById(id:any) {
    return this.http.get("http://localhost:9001/single/"+id)
  }

  public UpdateUser(id:any, data:any) {
    return this.http.put("http://localhost:9001/update/"+id, data, {responseType: 'text' as 'json'})
  }
}
