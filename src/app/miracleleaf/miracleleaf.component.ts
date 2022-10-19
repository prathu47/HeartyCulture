import { Component, OnInit } from '@angular/core';
import * as plant from "./miracle.json";
import { GalleryDirective } from '../gallery.directive';
@Component({
  selector: 'app-miracleleaf',
  templateUrl: './miracleleaf.component.html',
  styleUrls: ['./miracleleaf.component.css']
})
export class MiracleleafComponent implements OnInit {
  zoomimage="https://cdn.shopify.com/s/files/1/0487/7598/7354/products/001_1_1171822f-22ee-443d-b5be-97c5e7915880_938x938.png?v=1633608608"
  currentRate= 3
  constructor() { }
  Product:any[]=[
    {
      "price":400
    }
    
   ]

  ngOnInit(): void {
  }
  Prod:any = (plant as any).default;

}
