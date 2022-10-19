import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';
import { AdminService } from '../admin.service';
//npm install sweetalert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  userapi=environment.userapi;
  admin=environment.adminapi;
  isadmin:boolean = false;
  submitted = false;

  get f() {return this.loginForm.controls;}

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router: Router, private userService: UserService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.userService.validateAuth(false);
    this.adminService.validateAdmin(false);
    this.loginForm = this.formBuilder.group({
      useremail: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    this.submitted = true;
    console.log("Login Called");
    if (this.loginForm.invalid){
      return;
    }
    this.http.get<any>(this.userapi).subscribe(res =>{
      const user = res.find((a:any) => {
        console.log(a.useremail,a.password);
        return a.useremail === this.loginForm.value.useremail && a.password === this.loginForm.value.password
      });

          if (this.loginForm.value.useremail == "admin@gmail.com" && this.loginForm.value.password == "admin@123")
          {
            this.isadmin = true;
          }
          else{
            this.isadmin =  false;
          }

    
      if(user){
        const Toast = Swal.mixin({
          toast:true,
          position:'top',
          showConfirmButton: false,
          timer:3000,
        })

        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate(['']);
        this.userService.validateAuth(true);
      } 
      else if(this.isadmin)
      {
        const Toast = Swal.mixin({
          toast:true,
          position:'top',
          showConfirmButton: false,
          timer:3000,
        })

        Toast.fire({
          icon: 'success',
          title: 'Login Successful'
        })
        this.loginForm.reset();
        this.router.navigate(['']);
        this.adminService.validateAdmin(true);
      }
      else{
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
        })
    
        Toast.fire({
          icon: 'error',
          title: 'User not found'
        })       
        this.userService.validateAuth(false);
        this.adminService.validateAdmin(false);
      }
    })
  }
}