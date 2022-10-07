import { Component, OnInit } from '@angular/core';
import * as product from "src/app/medicine-seeds/medicine.json";
@Component({
  selector: 'app-medicine-seeds',
  templateUrl: './medicine-seeds.component.html',
  styleUrls: ['./medicine-seeds.component.css']
})
export class MedicineSeedsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productDetails:any=(product as any).default;
}

