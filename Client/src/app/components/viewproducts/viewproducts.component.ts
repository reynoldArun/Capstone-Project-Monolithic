import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from './../../Services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  products: any = []
  message:any;
  showMessage:boolean= false;
  uid:any

  constructor(private PService: ProductServiceService, private active: ActivatedRoute, private CService: CartServiceService) { }

  ngOnInit(): void {
    this.GetAllMedicine()
    this.uid = localStorage.getItem('id')
  }

  GetAllMedicine() {
    this.PService.GetAllProducts().subscribe(data => this.products=data)
  }

  addToCart(productid:any) {
    let validate = localStorage.getItem('token')
    if(validate === 'admintoken') {
      this.message = "Not Allowed Login as user !!"
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 3000);
    } else if(validate === null) {
      this.message = "Not Allowed Login as user !!"
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 3000);
    } else {
      this.CService.addToCart(productid, this.uid).subscribe(res => {
        this.message = "Medicine added to cart"
        this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 1000);
      })
    }
  }

}
