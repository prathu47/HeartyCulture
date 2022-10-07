import { Component, OnInit } from '@angular/core';
import * as product from "src/app/flower-seeds/seeds.json";
@Component({
  selector: 'app-flower-seeds',
  templateUrl: './flower-seeds.component.html',
  styleUrls: ['./flower-seeds.component.css']
})
export class FlowerSeedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productDetails:any=(product as any).default;
}
