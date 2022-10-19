import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cartitems } from '../cartitems';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkout=environment.checkoutapi;
  checkoutForm = new FormGroup({
    country: new FormControl(''),
    firstname : new FormControl(''),
    lastname : new FormControl(''),
    address: new FormControl(''),
    apartment : new FormControl(''),
    city : new FormControl(''),
    state : new FormControl(''),
    phone : new FormControl('')
  })

  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private cartSvc: CartService, private router: Router) { }
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
    this.checkoutForm = this.formBuilder.group({
      country: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: ['', Validators.required],
      apartment: ['',Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', Validators.required,Validators.pattern('[0-9]*')]
      
    });
    
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
  //jsonstore
  get f() { return this.checkoutForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }

    this.http.post<any>(this.checkout, this.checkoutForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Swal.fire({
          icon: 'success',
          title: 'You have Entered Details'
        })
        this.checkoutForm.reset();
        this.router.navigate(['payment']);
       
      })


}

  // sortCart(cartItemsList: any) {
  //   let localCart: any = [];
  //   let tempLocalCart: any = [];
  //   // console.log(this.temp_cart);
  //   for (let i = 0; i < cartItemsList.length; i++) {
  //     if (localCart.length == 0) {
  //       tempLocalCart.push(cartItemsList[i].cart_id);
  //       cartItemsList[i].cart_quality = 1;
  //       localCart.push(cartItemsList[i]);
  //       console.log("Manga" ,localCart);
  //     } else {
  //       for (let j of localCart) {
  //         if (j.cart_id === cartItemsList[i].cart_id) {
  //           j.cart_quality++;
  //         } else {
  //           cartItemsList[i].cart_quality = 1;
  //           localCart.push(cartItemsList[i])
  //         }
  //       }
  //     }
  //   }
  //   return localCart;
  // }


}
