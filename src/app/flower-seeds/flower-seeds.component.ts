import { Component, OnInit } from '@angular/core';
import { Cartitems } from 'src/app/cartitems';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';
import * as product from "src/app/flower-seeds/seeds.json";
@Component({
  selector: 'app-flower-seeds',
  templateUrl: './flower-seeds.component.html',
  styleUrls: ['./flower-seeds.component.css']
})
export class FlowerSeedsComponent implements OnInit {
  searchText: string='';

  constructor(private cartsrv:CartService) { }
  cart:Cartitems={
    cart_id:0,
    cart_image:'',
    cart_name:'',
    cart_price:0,
    cart_quality:1,
    total_price:1
  }
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
  total_price: number = 0;
  cart_quality:number=1;

  ngOnInit(): void {
    this.cartsrv.getCartItems().subscribe(
      (response) => {
        this.cartsi = response;
        console.log(this.cart)
      }
    )
  }
  productDetails:any=(product as any).default;
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.productDetails = this.productDetails.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
          break;
        }
  
      case "High":
        {
          this.productDetails = this.productDetails.sort((low: { price: number; }, high: { price: number; }) => high.price - low.price);
          break;
        }
  
      case "Name":
        {
          this.productDetails = this.productDetails.sort(function (low: { pname: String; }, high: { pname: String; }) {
            if (low.pname < high.pname) {
              return -1;
            }
            else if (low.pname > high.pname) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }
        case "HName":
          {
            this.productDetails = this.productDetails.sort(function (low: { pname: String; }, high: { pname: String; }) {
              if (low.pname > high.pname) {
                return -1;
              }
              else if (low.pname < high.pname) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }
  
      default: {
        this.productDetails = this.productDetails.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
        break;
      }
  
    }
    return this.productDetails;
  }
  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    console.log(this.searchText);
   }
   
  
}
