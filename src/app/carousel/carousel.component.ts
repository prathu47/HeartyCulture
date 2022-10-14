import { Component, OnInit } from '@angular/core';
import { Cactus } from '../cactus';
import { CactusService } from '../cactus.service';
import * as product from "src/app/fruit-trees/fruits.json";
import * as palm from 'src/app/palms-cycas/palm.json';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cactusdetails:Cactus[]=[];

  constructor(private cactusService:CactusService) { }

  fruittreesDetails:any=(product as any).default;

  palmplant:any=(palm as any).default;

  //showButton:boolean=false;
  
   toggle(){
    //this.showButton=!this.showButton
   }

  ngOnInit(): void {
    const contObervable=this.cactusService.getcactusdetails();
    contObervable.subscribe((cactusData:Cactus[])=>{
      this.cactusdetails=cactusData;
    });
  }

}
