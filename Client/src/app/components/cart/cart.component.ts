import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { UserServiceService } from 'src/app/Services/user-service.service';
import { User } from 'src/Model/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts:any = []
  uid:any
  grandTotal:any
  user:User = new User()
  message:any

  Length:any;
  showMessage:boolean = false;

  constructor(private Uservice: UserServiceService, private Service:CartServiceService, private active: ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = this.active.snapshot.paramMap.get('id')
    this.getCart()
    this.findTotalPrice()
  }

  findTotalPrice() {
    this.grandTotal = 0;
    this.Service.getAllCartItems(this.uid).subscribe(carts => {
      for(let cart of carts) {
        this.grandTotal += cart.totalPrice;
      }
    })
  }


  getCart() {
    this.Uservice.GetUserById(this.uid).subscribe((res) => {
      this.user=res
      this.Service.getAllCartItems(this.uid).subscribe((data) => {
        this.carts=data
        this.Length=data.length
      })
    })
  }

  increase(cart:any, id:any) {
    cart.unit +=1
    cart.totalPrice = cart.unit*cart.product.amount;
    this.updateCart(cart, id)
  }

  decrease(cart:any, id:any) {
    cart.unit -=1
    cart.totalPrice = cart.unit*cart.product.amount;
    this.updateCart(cart, id)
  }

  updateCart(cart:any, id:any) {
    this.Service.updateCart(cart, id).subscribe(res => {
      this.getCart()
    })
  }

  deleteCart(id:any, index:any) {
    this.Service.DeleteCartItems(id).subscribe(res => {
      this.carts.splice(index, 1)
      if(res === 'Deleted!!') {
        this.message = "Medicine Removed !!"
        this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 1000);
      } else {
        this.message = "Something went Wrong!!"
        this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 1000);
      }
    })
  }

}
