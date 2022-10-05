import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/fruit-trees/fruits.json";
@Component({
  selector: 'app-fruit-trees',
  templateUrl: './fruit-trees.component.html',
  styleUrls: ['./fruit-trees.component.css']
})
export class FruitTreesComponent implements OnInit {

  constructor() { }

  @Input()product:any

  ngOnInit(): void {
  }
  productDetails=false;
  //Event to perform the toggle effect
  
  productDetail:any=(prod as any).default;

}
