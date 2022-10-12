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
<<<<<<< HEAD

  cactusdetails:Cactus[]=[];

  constructor(private cactusService:CactusService) { }

  fruittreesDetails:any=(product as any).default;

  palmplant:any=(palm as any).default;

=======
  //showButton:boolean=false;
  constructor() {
   
   }
   toggle(){
    //this.showButton=!this.showButton
   }
>>>>>>> 76ad5496402a601305215a9a9f60777df2f418f5

  ngOnInit(): void {
    const contObervable=this.cactusService.getcactusdetails();
    contObervable.subscribe((cactusData:Cactus[])=>{
      this.cactusdetails=cactusData;
    });
  }

}
