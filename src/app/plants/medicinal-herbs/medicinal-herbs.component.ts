import { Component, Input, OnInit } from '@angular/core';
import * as prod from "src/app/plantdata/medicinalherb.json";
@Component({
  selector: 'app-medicinal-herbs',
  templateUrl: './medicinal-herbs.component.html',
  styleUrls: ['./medicinal-herbs.component.css']
})
export class MedicinalHerbsComponent implements OnInit {

  constructor() { }
  @Input()

  ngOnInit(): void {
  }
  productDetails:any=(prod as any).default;
  
  
  productDetail:any=(prod as any).default;

}
