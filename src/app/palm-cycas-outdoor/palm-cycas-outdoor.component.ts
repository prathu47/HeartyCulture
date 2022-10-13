import { Component, Input, OnInit } from '@angular/core';

import * as outplants from 'src/app/palm-cycas-outdoor/palmoutdoor.json'

@Component({
  selector: 'app-palm-cycas-outdoor',
  templateUrl: './palm-cycas-outdoor.component.html',
  styleUrls: ['./palm-cycas-outdoor.component.css']
})
export class PalmCycasOutdoorComponent implements OnInit {
  searchKey:string="";
  @Input() product:any

  constructor() { }

productDetail:any=(outplants as any).default;
  ngOnInit(): void {
  }

}
