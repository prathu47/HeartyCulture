import { Component, OnInit } from '@angular/core';
import * as prod from "src/app/plantdata/indoorplants.json";
@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css']
})
export class IndoorComponent implements OnInit {
  showButton!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  productDetail:any=(prod as any).default;

}
