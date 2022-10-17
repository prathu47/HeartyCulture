import { Component, Input, OnInit } from '@angular/core';
import { Allproduct } from 'src/app/Plants-services/outdoor';
import { OutdoorService } from 'src/app/Plants-services/outdoor.service';
@Component({
  selector: 'app-outdoor-plants',
  templateUrl: './outdoor-plants.component.html',
  styleUrls: ['./outdoor-plants.component.css']
})
export class OutdoorPlantsComponent implements OnInit {
  pro: Allproduct[] = [];
  constructor(private allproduct: OutdoorService) {
  }

  ngOnInit(): void {
    const allproObservable = this.allproduct.getallproDetails();
    allproObservable.subscribe((allproductData: Allproduct[]) => {
      this.pro = allproductData;
    });
  }


}
