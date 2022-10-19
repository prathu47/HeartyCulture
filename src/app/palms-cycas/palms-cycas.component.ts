import { Component,Input, OnInit } from '@angular/core';

import * as palm from 'src/app/palms-cycas/palm.json';
@Component({
  selector: 'app-palms-cycas',
  templateUrl: './palms-cycas.component.html',
  styleUrls: ['./palms-cycas.component.css']
})
export class PalmsCycasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.palmplant= this.palmplant.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);

  }
 
  
  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.palmplant = this.palmplant.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
          break;
        }

      case "High":
        {
          this.palmplant = this.palmplant.sort((low: { price: number; }, high: { price: number; }) => high.price - low.price);
          break;
        }

      case "Name":
        {
          this.palmplant = this.palmplant.sort(function (low: { pname: String; }, high: { pname: String; }) {
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
            this.palmplant = this.palmplant.sort(function (low: { pname: String; }, high: { pname: String; }) {
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
        this.palmplant = this.palmplant.sort((low: { price: number; }, high: { price: number; }) => low.price - high.price);
        break;
      }

    }
    return this.palmplant;
  }

  

  
  
  palmplant:any=(palm as any).default;



}
