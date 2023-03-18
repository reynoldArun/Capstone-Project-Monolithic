import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {

  data:any;

  constructor(private Service: ProductServiceService) { }

  ngOnInit(): void {
    this.GetAllProducts()
  }

  GetAllProducts() {
    this.Service.GetAllProducts().subscribe(res => this.data=res)
  }

  delete(id:number, index:any) {
    this.Service.DeleteProduct(id).subscribe(() => {
      this.data.splice(index, 1);
    })
  }

}
