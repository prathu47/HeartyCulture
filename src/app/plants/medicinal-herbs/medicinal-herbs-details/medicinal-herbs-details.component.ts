import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as prod from "src/app/plantdata/medicinalherb.json";
import { Cartitems } from 'src/app/cartitems';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-medicinal-herbs-details',
  templateUrl: './medicinal-herbs-details.component.html',
  styleUrls: ['./medicinal-herbs-details.component.css']
})
export class MedicinalHerbsDetailsComponent implements OnInit {

  medicinalherbsDetails:any=(prod as any).default;

  constructor(private route:ActivatedRoute,private cartsrv:CartService) { }

  currentRate= 3

  course:any;
  totalid:number | any;

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
    this.totalid=this.route.snapshot.paramMap.get('id');
   this.course=this.medicinalherbsDetails.find((x:any) => x.pid==this.totalid);

   this.cartsrv.getCartItems().subscribe(
    (response) => {
      this.cartsi = response;
      console.log(this.cart)
    }
  )

  }


}
