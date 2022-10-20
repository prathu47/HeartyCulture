import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
//npm install sweetalert2


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //public registerForm!:FormGroup;
  userurl = environment.userapi;
  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    useremail: new FormControl(''),
    password: new FormControl('')
    
  })

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      lastname: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(1), Validators.maxLength(16)],
      useremail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
      
    });
  }
  get f() { return this.registerForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post<any>(this.userurl, this.registerForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        })
    
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful'
        })
        this.registerForm.reset();
        this.router.navigate(['login']);
      })

  }

}