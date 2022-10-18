import { Component, OnInit } from '@angular/core';
import * as product from "src/app/allproducts/allproducts.json";
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  productDetails:any=(product as any).default;

}
