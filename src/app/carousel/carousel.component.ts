import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  //showButton:boolean=false;
  constructor() {
   
   }
   toggle(){
    //this.showButton=!this.showButton
   }

  ngOnInit(): void {
  }

}
