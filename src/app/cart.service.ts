import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cartitems } from './cartitems';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  url:string=""
  carturl=environment.cartapi;

  constructor(private http:HttpClient) {
    this.url=this.carturl+"/";
   }

   addToCart(product: Cartitems){
    this.http.post<Cartitems>(this.carturl,product).subscribe(data =>{
      console.log(product)
    })
   }

   getCartItems(){
    return this.http.get<Cartitems[]>(this.carturl);
   }

   removeItemFromCart(item:any){
    return this.http.delete(this.url + item.id)
   }

   public countCartitem=new Subject<number>();
   getCount(){
    return this.getCartItems().subscribe(res =>{
      this.countCartitem.next(res.length);
      console.log(this.countCartitem+"inside sub")
    })
   }
}
