import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-palm-indoor',
  templateUrl: './palm-indoor.component.html',
  styleUrls: ['./palm-indoor.component.css']
})
export class PalmIndoorComponent implements OnInit {
  showButton:boolean;
  @Input()product:any

  constructor() {
    this.showButton=false;
   }

  ngOnInit(): void {
  }



}
