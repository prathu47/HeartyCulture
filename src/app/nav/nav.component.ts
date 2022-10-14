import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 public searchTerm:string='';
  constructor() { }

  // public logo="https://cdn.shopify.com/s/files/1/0487/7598/7354/files/logo_horizontal_1912x500.png?v=1614351315";
  public logo="https://i.postimg.cc/nr3wpQpG/Hearty-Culture-Nursery-Logo-1912-X-500.png"; //Testing newly created logo


  ngOnInit(): void {
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
  }

}
