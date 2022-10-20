import { Component, OnInit } from '@angular/core';
import { Cactus } from '../cactus';
import { CactusService } from '../cactus.service';

@Component({
  selector: 'app-cactus-succulents',
  templateUrl: './cactus-succulents.component.html',
  styleUrls: ['./cactus-succulents.component.css']
})
export class CactusSucculentsComponent implements OnInit {

  searchText: string='';
  cactusdetails:Cactus[]=[];
 

  constructor(private cactusService:CactusService) { 
    
  }

  ngOnInit(): void {

    this.cactusdetails= this.cactusdetails.sort((low: { cactus_price: number; }, high: { cactus_price: number; }) => low.cactus_price - high.cactus_price);

    const contObervable=this.cactusService.getcactusdetails();
    contObervable.subscribe((cactusData:Cactus[])=>{
      this.cactusdetails=cactusData;
    });

  }

  sort(event: any) {
    switch (event.target.value) {
      case "Low":
        {
          this.cactusdetails = this.cactusdetails.sort((low: { cactus_price: number; }, high: { cactus_price: number; }) => low.cactus_price - high.cactus_price);
          break;
        }

      case "High":
        {
          this.cactusdetails = this.cactusdetails.sort((low: { cactus_price: number; }, high: { cactus_price: number; }) => high.cactus_price - low.cactus_price);
          break;
        }

      case "Name":
        {
          this.cactusdetails = this.cactusdetails.sort(function (low: { cactus_name: String; }, high: { cactus_name: String; }) {
            if (low.cactus_name < high.cactus_name) {
              return -1;
            }
            else if (low.cactus_name > high.cactus_name) {
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
            this.cactusdetails = this.cactusdetails.sort(function (low: { cactus_name: String; }, high: { cactus_name: String; }) {
              if (low.cactus_name > high.cactus_name) {
                return -1;
              }
              else if (low.cactus_name < high.cactus_name) {
                return 1;
              }
              else {
                return 0;
              }
            })
            break;
          }

      default: {
        this.cactusdetails = this.cactusdetails.sort((low: { cactus_price: number; }, high: { cactus_price: number; }) => low.cactus_price - high.cactus_price);
        break;
      }

    }
    return this.cactusdetails;
  }
 
  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    console.log(this.searchText);
   }
   
  
 
}
