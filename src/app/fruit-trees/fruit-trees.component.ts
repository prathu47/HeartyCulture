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
    this.productDetails= this.productDetails.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
  }
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.productDetails = this.productDetails.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.productDetails = this.productDetails.sort((low: { price: number; }, high: { price: number; }) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.productDetails = this.productDetails.sort(function (low: { pname: String; }, high: { pname: String; }) {
            if (low.pname < high.pname) {
              return -1;
            }
            else if (low.pname > high.pname) {
              return 1;
            }
            else {
              return 0;
            }
          })
          break;
        }
        case "HName":
          {
            this.productDetails = this.productDetails.sort(function (low: { pname: String; }, high: { pname: String; }) {
              if (low.pname > high.pname) {
                return -1;
              }
              else if (low.pname < high.pname) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }

      default: {
        this.productDetails = this.productDetails.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
        break;
      }

    }
    return this.productDetails;
  }

  
  productDetails:any=(product as any).default;

}

