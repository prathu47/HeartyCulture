import { Component, Input, OnInit } from '@angular/core';

import * as outplants from 'src/app/palm-cycas-outdoor/palmoutdoor.json'

@Component({
  selector: 'app-palm-cycas-outdoor',
  templateUrl: './palm-cycas-outdoor.component.html',
  styleUrls: ['./palm-cycas-outdoor.component.css']
})
export class PalmCycasOutdoorComponent implements OnInit {
  // searchText: string='';

  @Input() product:any

  constructor() { }

productDetail:any=(outplants as any).default;
  ngOnInit(): void {
    this.productDetail= this.productDetail.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
  }

  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.productDetail = this.productDetail.sort(function (low: { pname: String; }, high: { pname: String; }) {
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
            this.productDetail = this.productDetail.sort(function (low: { pname: String; }, high: { pname: String; }) {
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
        this.productDetail = this.productDetail.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
        break;
      }

    }
    return this.productDetail;
  }
  // onSearchTextEntered(searchValue : string){
  //   this.searchText=searchValue;
  //   // console.log(this.searchText);

  
  

}
