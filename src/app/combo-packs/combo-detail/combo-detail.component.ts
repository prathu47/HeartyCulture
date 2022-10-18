import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cartitems } from 'src/app/cartitems';
import { CartService } from 'src/app/cart.service';
import Swal from 'sweetalert2';
import { ComboServiceService } from '../combo-service.service';


@Component({
  selector: 'app-combo-detail',
  templateUrl: './combo-detail.component.html',
  styleUrls: ['./combo-detail.component.css']
})
export class ComboDetailComponent implements OnInit {

  currentRate= 3

  course:any;
  totalid:number | any;
  constructor(private route:ActivatedRoute,private cartsrv:CartService,private combosrv:ComboServiceService) { }

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
    this.cart.cart_image=product.combo_image;
    this.cart.cart_name=product.combo_name;
    this.cart.cart_price=product.combo_price;
    this.cart.total_price=product.total_price;
    this.cart.cart_quality=product.cart_quality;
    this.cart.cart_id=product.combo_id;
    this.cartsrv.addToCart(this.cart);
    console.log(product.combo_id)
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

    /*console.warn("Cactus id is",this.route.snapshot.paramMap.get('id'));
    this.cactusid=this.route.snapshot.paramMap.get('id');*/

   /* this.route.params.subscribe(params => this.getCactusById(params['id']));*/
   
   this.totalid=this.route.snapshot.paramMap.get('id');
   this.course=this.combosrv.combo_details.find(x => x.combo_id==this.totalid);
   

   this.cartsrv.getCartItems().subscribe(
    (response) => {
      this.cartsi = response;
      console.log(this.cart)
    }
  )

  }


}
