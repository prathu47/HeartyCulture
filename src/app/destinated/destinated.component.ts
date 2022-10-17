import { Component, OnInit } from '@angular/core';
import { GalleryDirective } from '../gallery.directive';

@Component({
  selector: 'app-destinated',
  templateUrl: './destinated.component.html',
  styleUrls: ['./destinated.component.css']
})
export class DestinatedComponent implements OnInit {
  currentRate= 3
  constructor() { }
  Product:any[]=[
    {
      "price":400
    }
    
   ]

  ngOnInit(): void {
  }

}
