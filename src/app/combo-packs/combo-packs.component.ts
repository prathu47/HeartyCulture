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

    this.combodetails= this.combodetails.sort((low: { combo_price: number; }, high: { combo_price: number; }) => low.combo_price - high.combo_price);
    
    
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
   
sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.combodetails = this.combodetails.sort((low: { combo_price: number; }, high: { combo_price: number; }) => low.combo_price - high.combo_price);
          break;
        }

      case "High":
        {
          this.combodetails = this.combodetails.sort((low: { combo_price: number; }, high: { combo_price: number; }) => high.combo_price - low.combo_price);
          break;
        }

      case "Name":
        {
          this.combodetails = this.combodetails.sort(function (low: { combo_name: String; }, high: { combo_name: String; }) {
            if (low.combo_name < high.combo_name) {
              return -1;
            }
            else if (low.combo_name > high.combo_name) {
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
            this.combodetails = this.combodetails.sort(function (low: { combo_name: String; }, high: { combo_name: String; }) {
              if (low.combo_name > high.combo_name) {
                return -1;
              }
              else if (low.combo_name < high.combo_name) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }

      default: {
        this.combodetails = this.combodetails.sort((low: { combo_price: number; }, high: { combo_price: number; }) => low.combo_price - high.combo_price);
        break;
      }

    }
    return this.combodetails;
  }
 
  

}
