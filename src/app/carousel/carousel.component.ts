import { Component, OnInit } from '@angular/core';
import { Cactus } from '../cactus';
import { CactusService } from '../cactus.service';
import * as product from "src/app/fruit-trees/fruits.json";
import * as palm from 'src/app/palms-cycas/palm.json';
import { CartService } from 'src/app/cart.service';
import { Cartitems } from 'src/app/cartitems';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as mediherbs from "src/app/plantdata/medicinalherb.json";
import { OutdoorService } from 'src/app/Plants-services/outdoor.service';
import { Allproduct } from 'src/app/Plants-services/outdoor';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
 

  cactusdetails:Cactus[]=[];

  outdoorplants:Allproduct[]=[];

  constructor(private cactusService:CactusService,private cartsrv:CartService,private oudoosrv:OutdoorService) { }

  fruittreesDetails:any=(product as any).default;

  palmplant:any=(palm as any).default;

  medicinalherbs:any=(mediherbs as any).default;



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

  addToCart1(product:any){
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
    
    const contObervable=this.cactusService.getcactusdetails();
    contObervable.subscribe((cactusData:Cactus[])=>{
      this.cactusdetails=cactusData;
    });

    this.cartsrv.getCartItems().subscribe(
      (response) => {
        this.cartsi = response;
        console.log(this.cart)
      }
    )

    const allproObservable = this.oudoosrv.getallproDetails();
    allproObservable.subscribe((allproductData: Allproduct[]) => {
      this.outdoorplants = allproductData;
    });
  }
  productsearch: string=' '  

  search_product(pname:string):void{ 
    if(pname=='')
    {
      // this.productentered=' ';
      alert('search something');
    }
    
    
    this.productsearch=pname  ; //Laptop
    console.log(pname)
  }
  
 

}
