import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Cartitems } from 'src/app/cartitems';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cactus-chils',
  templateUrl: './cactus-chils.component.html',
  styleUrls: ['./cactus-chils.component.css']
})
export class CactusChilsComponent implements OnInit {
  
  cactusData!:any;
  showButton:boolean;

  constructor(private cartsrv:CartService,private router:Router) {
    this.showButton=true;
   }

   cart:Cartitems={
    cart_id:0,
    cart_image:'',
    cart_name:'',
    cart_price:0,
    cart_quality:1,
    total_price:1
  }

  total_price: number = 0;
  cart_quality:number=1;

addToCart(product:any){
  this.cart.cart_image=product.cactus_image;
  this.cart.cart_name=product.cactus_name;
  this.cart.cart_price=product.cactus_price;
  this.cart.total_price=product.total_price;
  this.cart.cart_quality=product.cart_quality;
  this.cart.cart_id=product.cactus_id;
  this.cartsrv.addToCart(this.cart);
  console.log(product.cactus_id)
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
  })
  Toast.fire({
    icon: 'success',
    title: 'Item added successfully'
  })
  this.cartsrv.getCount();
}

cartsi: Cartitems[] = [];

  ngOnInit(): void {
    this.cartsrv.getCartItems().subscribe(
      (response) => {
        this.cartsi = response;
        console.log(this.cart)
      }
    )
  }
@Input()product_cactus:any



}
