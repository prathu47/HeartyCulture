import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/plantdata/indoorplants.json";
@Component({
  selector: 'app-indoor-plants',
  templateUrl: './indoor-plants.component.html',
  styleUrls: ['./indoor-plants.component.css']
})
export class IndoorPlantsComponent implements OnInit {

  constructor() { }
  @Input()product:any

  ngOnInit(): void {
  }
  productDetails=false;
 
  
  
  productDetail:any=(prod as any).default;

}
