import { Component, OnInit } from '@angular/core';
import { ComboServiceService } from './combo-service.service';
import { Combo } from './combo';


@Component({
  selector: 'app-combo-packs',
  templateUrl: './combo-packs.component.html',
  styleUrls: ['./combo-packs.component.css']
})
export class ComboPacksComponent implements OnInit {

  combodetails:Combo[]=[];

  constructor(private comboService:ComboServiceService) { }

  ngOnInit(): void {
    const contObervable=this.comboService.getcombodetails();
    contObervable.subscribe((comboData:Combo[])=>{
      this.combodetails=comboData;
    });
  }

}
