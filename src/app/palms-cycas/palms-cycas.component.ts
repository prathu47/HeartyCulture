import { Component,Input, OnInit } from '@angular/core';

import * as palm from 'src/app/palms-cycas/palm.json';
@Component({
  selector: 'app-palms-cycas',
  templateUrl: './palms-cycas.component.html',
  styleUrls: ['./palms-cycas.component.css']
})
export class PalmsCycasComponent implements OnInit {
  searchText: string='';

  constructor() { }

  ngOnInit(): void {
  }
  
  palmplant:any=(palm as any).default;
  onSearchTextEntered(searchValue : string){
    this.searchText=searchValue;
    console.log(this.searchText);
   }
   



}
