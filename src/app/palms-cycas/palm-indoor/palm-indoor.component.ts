import { Component, OnInit, Input } from '@angular/core';
import { Cartitems } from 'src/app/cartitems';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-palm-indoor',
  templateUrl: './palm-indoor.component.html',
  styleUrls: ['./palm-indoor.component.css']
})
export class PalmIndoorComponent implements OnInit {
  showButton:boolean;
  @Input()product:any

  constructor(private cartsrv:CartService) {
    this.showButton=false;
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
    this.cart.cart_image=product.img;
    this.cart.cart_name=product.pname;
    this.cart.cart_price=product.price;
    this.cart.total_price=product.total_price;
    this.cart.cart_quality=product.cart_quality;
    this.cart.cart_id=product.pid;
    this.cartsrv.addToCart(this.cart);
    console.log(product.pid)
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



}
