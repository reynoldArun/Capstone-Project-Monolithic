import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Services/product-service.service';
import { Product } from 'src/Model/Product';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product: Product = new Product()
  success:boolean = false
  message:any

  constructor(private router: Router, private Service: ProductServiceService) { }

  ngOnInit(): void {
  }

  CreateProduct() {
    this.Service.createProduct(this.product).subscribe(res => {
      if(res !== null) {
        this.message = 'User created Successfully!!'
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000);
        this.router.navigate(['/admin/dashboard/products'])
      } else {
        this.message = 'Something went Wrong Try again !!'
        this.success = true
        setTimeout(() => {
          this.success = false
        }, 3000);
      }
    })
  }

}
