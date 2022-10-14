import { Component, OnInit, Input } from '@angular/core';
import { FormArrayName, FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-cactus-chils',
  templateUrl: './cactus-chils.component.html',
  styleUrls: ['./cactus-chils.component.css']
})
export class CactusChilsComponent implements OnInit {
  
  cactusData!:any;
  showButton:boolean;
  constructor() {
    this.showButton=true;
   }

  ngOnInit(): void {
  }
@Input()product_cactus:any



}
