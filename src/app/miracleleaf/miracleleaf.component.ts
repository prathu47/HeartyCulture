import { Component, OnInit } from '@angular/core';
import * as plant from "./miracle.json";
import { GalleryDirective } from '../gallery.directive';
@Component({
  selector: 'app-miracleleaf',
  templateUrl: './miracleleaf.component.html',
  styleUrls: ['./miracleleaf.component.css']
})
export class MiracleleafComponent implements OnInit {
  currentRate= 3
  constructor() { }
  Product:any[]=[
    {
      "price":400
    }
    
   ]

  ngOnInit(): void {
  }
  Prod:any = (plant as any).default;

}
