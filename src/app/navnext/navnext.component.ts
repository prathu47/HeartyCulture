import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-navnext',
  templateUrl: './navnext.component.html',
  styleUrls: ['./navnext.component.css']
})
export class NavnextComponent implements OnInit {

  constructor(private authService:UserService,private adminService:AdminService) { }
  auth:boolean=false;
  admin:boolean=false;
  ngOnInit(): void {
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside navnext component: ' + data);
        this.auth = data;
      }
    );
    this.adminService.adminSubject.subscribe(
      data => 
      {
        console.log('admin inside nav component: ' + data);
        this.admin = data;
      }
    );
  }
  

}

  