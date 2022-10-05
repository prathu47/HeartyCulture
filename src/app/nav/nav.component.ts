import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  public logo="https://cdn.shopify.com/s/files/1/0487/7598/7354/files/logo_horizontal_1912x500.png?v=1614351315";

  ngOnInit(): void {
  }

}
