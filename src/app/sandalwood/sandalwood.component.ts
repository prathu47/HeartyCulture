import { Component, OnInit } from '@angular/core';
import { GalleryDirective } from '../gallery.directive';
import { Cartitems } from 'src/app/cartitems';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sandalwood',
  templateUrl: './sandalwood.component.html',
  styleUrls: ['./sandalwood.component.css']
})
export class SandalwoodComponent implements OnInit {
  currentRate= 3
  
  constructor(private cartsrv:CartService) { }
  Products:any[]=[
    {
      "img":"https://cdn.shopify.com/s/files/1/0487/7598/7354/products/513A7376_150x150_crop_center.png?v=1635154340",
      "pname":"Sandal wood | Santalum album",
      "price":300.00,
      "productname":"Common Name: Sandal wood",
      "productdiscription":"Botanical name: Santalum album",
      "productexplain":"Sandalwoods are heavy, yellow, and fine-grained, and, unlike many other aromatic woods, retain their fragrance for decades. Sandalwood is often cited as one of the most expensive woods in the world. Both the wood and the oil produce a distinctive fragrance that has been highly valued for centuries."
    }
    
   ]
    //Event to hide Products
   isVisible:boolean=true;
   hide_products()
   {
    this.isVisible=!this.isVisible;
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
    this.cart.cart_name=product.productname;
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
