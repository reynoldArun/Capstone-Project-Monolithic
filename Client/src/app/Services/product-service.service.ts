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


  public DeleteProduct(id:any) {
    return this.http.delete("http://localhost:8080/product/delete/"+id, {responseType: 'text' as 'json'})
  }

  public createProduct(medicine:any) {
    return this.http.post("http://localhost:8080/product/add", medicine, {responseType: 'text' as 'json'})
  }

  public SearchProduct(name:any) {
    return this.http.get("http://localhost:8080/product/search/"+name , {responseType: 'text' as 'json'})
  }
  
  public GetProductById(id:any) {
    return this.http.get<any>("http://localhost:8080/product/single/"+id)
  }

  public UpdateProduct(id:any, data:any) {
    return this.http.put("http://localhost:8080/product/update/"+id, data, {responseType: 'text' as 'json'})
  }

}
