import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/plantdata/outdoorplants.json";
@Component({
  selector: 'app-outdoor-plants',
  templateUrl: './outdoor-plants.component.html',
  styleUrls: ['./outdoor-plants.component.css']
})
export class OutdoorPlantsComponent implements OnInit {

  constructor() { }
 @Input()product:any

  ngOnInit(): void {
  }
  productDetails=false;
  productDetail:any=(prod as any).default;

}
