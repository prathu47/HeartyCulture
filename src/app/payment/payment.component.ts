import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitems } from '../cartitems';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartSvc: CartService, private router: Router) { }
  carts: Cartitems = {
    cart_id: 0,
    cart_image: '',
    cart_name: '',
    cart_price: 0,
    cart_quality: 1,
    total_price: 1
  }
  cartData: any = [];
  total_price: number = 0;
  cart_quality = 1;

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.cart_price), intialValue);
    return a;
  }
  temp_cart: Cartitems[] = [];
  cart: Cartitems[] = [];
  map = new Map();
  cc:string[] = [];

  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.temp_cart = response;
        for (let item1 of this.temp_cart) {
          if(!this.map.has(item1.cart_id)) {
            this.map.set(item1.cart_id, 1);
            this.cc.push(item1.cart_id);
            console.log(this.cc)
          } else {
            let num = this.map.get(item1.cart_id);
            num = num + 1;
            this.map.set(item1.cart_id, num);
          }
        }
        
        for(let item1 of this.temp_cart) {
          console.log(item1)
          if(this.cc.includes(item1.cart_id)) {
            this.cart.push(item1);
            console.log("JJJ", item1.cart_id)
            var g = this.cc.indexOf(item1.cart_id)
            delete this.cc[g];
          }
        }
      }
    );
  }
  

}
