import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-navnext',
  templateUrl: './navnext.component.html',
  styleUrls: ['./navnext.component.css']
})
export class NavnextComponent implements OnInit {

  constructor(private authService:UserService) { }
  auth:boolean=false;
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside navnext component: ' + data);
        this.auth = data;
      }
    );
  }

}

  