import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  public GetAllProducts() {
    return this.http.get<any>("http://localhost:8080/product/all")
  }

  //(mircro service cors error)
  public DeleteProduct(id:any) {
    return this.http.delete("http://localhost:9002/delete/"+id, {responseType: 'text' as 'json'})
  }

  public createProduct(medicine:any) {
    return this.http.post("http://localhost:9002/add", medicine, {responseType: 'text' as 'json'})
  }

  public SearchProduct(name:any) {
    return this.http.get("http://localhost:9002/search/"+name , {responseType: 'text' as 'json'})
  }
  
  public GetProductById(id:any) {
    return this.http.get<any>("http://localhost:9002/single/"+id)
  }

  public UpdateProduct(id:any, data:any) {
    return this.http.put("http://localhost:9002/update/"+id, data, {responseType: 'text' as 'json'})
  }

}
