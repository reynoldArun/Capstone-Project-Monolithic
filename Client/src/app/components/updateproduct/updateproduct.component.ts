import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Product } from 'src/Model/Product';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  constructor(private Service: ProductServiceService, private router: Router, private active: ActivatedRoute) { }

  updateId:any;
  message:any;
  error:boolean = false;
 
  products: Product = {
    productName: '',
    amount: 0,
    img: '',
    category: '',
    quantity: 0

  }

  ngOnInit(): void {
    this.updateId = this.active.snapshot.paramMap.get('id')
    this.productById()
  }

  productById() {
    this.Service.GetProductById(this.updateId).subscribe(res => this.products=res)
    
  }
  
  updateProduct() {
    this.Service.UpdateProduct(this.updateId, this.products).subscribe(res => {
      if(res == 'Product created!!') {
        this.router.navigate(['/admin/dashboard/products'])
      } else {
        this.error = true
        this.message = 'Failed to Update Product!!!'
      }
    })
  }

}
