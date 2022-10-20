import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact=environment.contactapi;
  registerForm = new FormGroup({
    name: new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    message : new FormControl('')
  })

  submitted = false;
  

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      useremail: ['', Validators.required],
      mobile: ['', Validators.required, Validators.pattern('[0-9]*')],
      message: ['',[ Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6),Validators.maxLength(50)]],
      
    });
  }
  get f() { return this.registerForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post<any>(this.contact, this.registerForm.value)
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
          title: 'Thanks for your Valuable Feedback'
        })
        this.registerForm.reset();
       
      })


}
}
