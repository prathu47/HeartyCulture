import { Component, OnInit } from '@angular/core';
import * as prod from "src/app/plantdata/indoorplants.json";
import { CartService } from 'src/app/cart.service';
import { Cartitems } from 'src/app/cartitems';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css']
})
export class IndoorComponent implements OnInit {
  showButton!: boolean;
  constructor(private cartservice: CartService, private router: Router) { }
  cart: Cartitems = {
    cart_id: 0,
    cart_image: '',
    cart_name: '',
    cart_price: 0,
    cart_quality: 1,
    total_price: 1
  }

  total_price: number = 0;
  cart_quality: number = 1;

  addToCart(product: any) {
    this.cart.cart_image = product.img;
    this.cart.cart_name = product.pname;
    this.cart.cart_price = product.price;
    this.cart.total_price = product.total_price;
    this.cart.cart_quality = product.cart_quality;
    this.cart.cart_id = product.pid;
    this.cartservice.addToCart(this.cart);
    console.log(product.pid)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartservice.getCount();
  }

  cartsi: Cartitems[] = [];

  ngOnInit(): void {
    this.cartservice.getCartItems().subscribe(
      (response) => {
        this.cartsi = response;
        console.log(this.cart)
      }
    )
    
  }
  productDetail:any=(prod as any).default;
 

}
