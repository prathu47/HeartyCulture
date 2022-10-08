import { Component, Input, OnInit } from '@angular/core';
import * as product from "src/app/fruit-trees/fruits.json";
@Component({
  selector: 'app-fruit-trees',
  templateUrl: './fruit-trees.component.html',
  styleUrls: ['./fruit-trees.component.css']
})
export class FruitTreesComponent implements OnInit {

  constructor() { }

 

  ngOnInit(): void {
  }
  
  productDetails:any=(product as any).default;

}

