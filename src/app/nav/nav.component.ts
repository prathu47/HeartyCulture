import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 public searchTerm:string='';

  constructor(private cartSrv:CartService) { }

  // public logo="https://cdn.shopify.com/s/files/1/0487/7598/7354/files/logo_horizontal_1912x500.png?v=1614351315";
  public logo="https://i.postimg.cc/nr3wpQpG/Hearty-Culture-Nursery-Logo-1912-X-500.png"; //Testing newly created logo

cartCount:number=0;
  ngOnInit(): void {
    //cart Count
    this.cartSrv.getCartItems().subscribe(
      (response) =>
      {
        this.cartCount=response.length;
        console.log(this.cartCount);
      }
    )
    this.cartSrv.countCartitem.subscribe(
      (response) =>
      {
        this.cartCount=response;
        console.log(this.cartCount);
      }
    )
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }

}
