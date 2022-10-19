import { Component, OnInit } from '@angular/core';
import { ComboServiceService } from './combo-service.service';
import { Combo } from './combo';
import { CartService } from 'src/app/cart.service';
import { Cartitems } from 'src/app/cartitems';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-combo-packs',
  templateUrl: './combo-packs.component.html',
  styleUrls: ['./combo-packs.component.css']
})
export class ComboPacksComponent implements OnInit {
  searchText: string='';


  combodetails:Combo[]=[];

  constructor(private comboService:ComboServiceService,private cartsrv:CartService) { }
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
    
    const contObervable=this.comboService.getcombodetails();
    contObervable.subscribe((comboData:Combo[])=>{
      this.combodetails=comboData;
    });


    this.cartsrv.getCartItems().subscribe(
      (response) => {
        this.cartsi = response;
        console.log(this.cart)
      }
    )
  }

  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    console.log(this.searchText);
   }
   

}
