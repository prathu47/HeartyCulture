import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitems } from '../cartitems';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

 auth:boolean=false;
  constructor(private cartSvc: CartService,private authService:UserService, private router: Router) { }

  carts: Cartitems = {
    cart_id: 0,
    cart_image:'',
    cart_name: '',
    cart_price: 0,
    cart_quality: 1,
    total_price: 1
  }

  cartData: any = [];
  total_price: number = 0;
  cart_quality = 1;
  subTotal:number| any;

  totalPrice(data: any) {
    debugger
    const intialValue = 0;
    this.cartData = data
    const a = this.cartData.reduce((sum: any, item: any) => sum + (item.cart_price), intialValue);
    return a;
  }
  cart: Cartitems[] = [];

  delete(deleteItem: Cartitems) {
    this.cartSvc.removeItemFromCart(deleteItem).subscribe(
      () => console.log(deleteItem.cart_name)
    );
    /*const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully'
    })*/
    this.ngOnInit();
  }

  ChangeTotal(product:any,index: any){
      const qty=product.cart_quality;
      const amt=product.cart_price;

      this.subTotal=amt*qty;
  }
  ngOnInit(): void {
    this.cartSvc.getCartItems().subscribe(
      (response) => {
        this.cart = response;
        console.log(this.cart)
      }
    )
    this.authService.authSubject.subscribe(
      data=>{
        console.log('auth inside nav component:'+data);
        this.auth=data;
      }
    );
  }

}
