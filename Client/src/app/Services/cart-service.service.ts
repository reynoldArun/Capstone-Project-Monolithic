import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }
  
  getAllCartItems(id:any) {
    return this.http.get<any>("http://localhost:8080/cart/all/"+id)
  }

  DeleteCartItems(id:any) {
    return this.http.delete("http://localhost:9003/delete/"+id, {responseType: 'text' as 'json'})
  }

  public updateCart(cart:any, id:any) {
    return this.http.put("http://localhost:9003/update/"+id, cart, {responseType: 'text' as 'json'});
  }

  public addToCart(mid:any, cid:any) {
    return this.http.get<any>("http://localhost:8080/cart/add/"+mid+"/"+cid)
  }

}
  

