import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subscribe=environment.subscribeapi;
  subscribeForm = new FormGroup({
    email : new FormControl('')
   
  })

  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.subscribeForm = this.formBuilder.group({
      
      useremail: ['', Validators.required]
      
      
    });
  }
  get f() { return this.subscribeForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.subscribeForm.invalid) {
      return;
    }

    this.http.post<any>(this.subscribe, this.subscribeForm.value)
      .subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
        })
    
        Swal.fire({
          icon: 'success',
          title: 'Thanks for subscribing'
        })
        this.subscribeForm.reset();
       
      })


}
}
