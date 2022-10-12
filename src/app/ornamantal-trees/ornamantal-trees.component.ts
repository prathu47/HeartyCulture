import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/ornamantal-trees/ornamantal.json";
@Component({
  selector: 'app-ornamantal-trees',
  templateUrl: './ornamantal-trees.component.html',
  styleUrls: ['./ornamantal-trees.component.css']
})
export class OrnamantalTreesComponent implements OnInit {

  constructor() { }

 

  ngOnInit(): void {
  }
  
  
  productDetails:any=(prod as any).default;

}
