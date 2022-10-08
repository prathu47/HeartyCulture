import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/ornamantal-trees/ornamantal.json";
@Component({
  selector: 'app-ornamantal-trees',
  templateUrl: './ornamantal-trees.component.html',
  styleUrls: ['./ornamantal-trees.component.css']
})
export class OrnamantalTreesComponent implements OnInit {

  constructor() { }

  @Input()product:any

  ngOnInit(): void {
  }
  productDetails=false;
  //Event to perform the toggle effect
  
  productDetail:any=(prod as any).default;

}
