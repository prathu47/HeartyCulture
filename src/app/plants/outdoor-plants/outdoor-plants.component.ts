import { Component, Input, OnInit } from '@angular/core';
import { Allproduct } from 'src/app/Plants-services/outdoor';
import { OutdoorService } from 'src/app/Plants-services/outdoor.service';
import { CartService } from 'src/app/cart.service';
import { Cartitems } from 'src/app/cartitems';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-outdoor-plants',
  templateUrl: './outdoor-plants.component.html',
  styleUrls: ['./outdoor-plants.component.css']
})
export class OutdoorPlantsComponent implements OnInit {
  productDetail: any = [];
  constructor(private allproduct: OutdoorService,private cartservice: CartService, private router: Router) {
  }

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
    const allproObservable = this.allproduct.getallproDetails();
    allproObservable.subscribe((allproductData: Allproduct[]) => {
      this.productDetail = allproductData;
    });
    
    this.cartservice.getCartItems().subscribe(
      (response) => {
        this.cartsi = response;
        console.log(this.cart)
      }
    )
    this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
   
  }
  
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.productDetail = this.productDetail.sort(function (low: { pname: String; }, high: { pname: String; }) {
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
            this.productDetail = this.productDetail.sort(function (low: { pname: String; }, high: { pname: String; }) {
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
        this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
        break;
      }

    }
    return this.productDetail;
  }
 

}
