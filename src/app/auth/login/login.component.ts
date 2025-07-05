import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MaterialModule, NgClass, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService: Auth, private router: Router) { }

 

  userLogin = {
    username: "",
    password: "",
  }

onLogin() {
  const { username, password } = this.userLogin;

  this.authService.getUserByCredentials(username, password).subscribe((userData: any) => {
    const user = userData[0];

    if (user) {
      this.authService.user$.next(user);  // only pass the user, not array
      this.router.navigate(['/products'])
    Swal.fire({
      title: "Logged in successfully!",
      icon: "success"
    });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credentials are wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  });
}
}
