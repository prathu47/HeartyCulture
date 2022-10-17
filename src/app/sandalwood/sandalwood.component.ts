import { Component, OnInit } from '@angular/core';
import { GalleryDirective } from '../gallery.directive';
@Component({
  selector: 'app-sandalwood',
  templateUrl: './sandalwood.component.html',
  styleUrls: ['./sandalwood.component.css']
})
export class SandalwoodComponent implements OnInit {
  currentRate= 3
  constructor() { }
  Products:any[]=[
    {
      "price":300.00,
      "productname":"Common Name: Sandal wood",
      "productdiscription":"Botanical name: Santalum album",
      "productexplain":"Sandalwoods are heavy, yellow, and fine-grained, and, unlike many other aromatic woods, retain their fragrance for decades. Sandalwood is often cited as one of the most expensive woods in the world. Both the wood and the oil produce a distinctive fragrance that has been highly valued for centuries."
    }
    
   ]
    //Event to hide Products
   isVisible:boolean=true;
   hide_products()
   {
    this.isVisible=!this.isVisible;
   }


  ngOnInit(): void {
  }

}
