import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { MaterialModule } from '../../material/material.module';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, MaterialModule, NgClass, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private authService: Auth, private router: Router) { }

  userSignup = {
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNum: "",
    selectedRole:"",
  }

  onSignup() {

    this.authService.getUserByUsername(this.userSignup.username).subscribe((res: any) => {
      if (res.length > 0) {
        alert()
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username is already exist",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
      }
      this.authService.getUserByEmail(this.userSignup.email).subscribe((res: any) => {
        if (res.length > 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email is already exist",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          return;
        }
        this.authService.saveUser({...this.userSignup, cart:[]}).subscribe((res: any) => {
          if (res) {
            Swal.fire({
              title: "User created successfully!",
              icon: "success",
            });

            this.router.navigate(["/login"])
          }
        })

      })
    })
  }
}
