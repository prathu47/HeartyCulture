import { Component, OnInit } from '@angular/core';
import { Cactus } from '../cactus';
import { CactusService } from '../cactus.service';

@Component({
  selector: 'app-cactus-succulents',
  templateUrl: './cactus-succulents.component.html',
  styleUrls: ['./cactus-succulents.component.css']
})
export class CactusSucculentsComponent implements OnInit {


  cactusdetails:Cactus[]=[];
 

  constructor(private cactusService:CactusService) { 
    
  }

  ngOnInit(): void {
    const contObervable=this.cactusService.getcactusdetails();
    contObervable.subscribe((cactusData:Cactus[])=>{
      this.cactusdetails=cactusData;
    });
  }
 
  
 
}
