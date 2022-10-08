import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/plantdata/medicinalherb.json";
@Component({
  selector: 'app-medicinal-herbs',
  templateUrl: './medicinal-herbs.component.html',
  styleUrls: ['./medicinal-herbs.component.css']
})
export class MedicinalHerbsComponent implements OnInit {

  constructor() { }
  @Input()product:any

  ngOnInit(): void {
  }
  productDetails=false;
 
  //Event to perform the toggle effect
  
  productDetail:any=(prod as any).default;

}
