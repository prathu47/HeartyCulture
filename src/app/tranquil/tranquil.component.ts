import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranquil',
  templateUrl: './tranquil.component.html',
  styleUrls: ['./tranquil.component.css']
})
export class TranquilComponent implements OnInit {
  currentRate= 3
  constructor() { }

  ngOnInit(): void {
  }

}
