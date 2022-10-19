import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//To access the userapi (i.e.) http://localhost:3000/users
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public adminSubject = new Subject<boolean>();
  //Nav component to block access to other components
  validateAdmin(data:boolean) {
    //passing the data as the next observable
    this.adminSubject.next(data);
  }
  //hosturl=environment.userapi;
  
  value?:boolean;
    getAuthStatus(){
    this.adminSubject.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    return this.value;
  }
  constructor() { }
}