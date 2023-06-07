import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/auth/users/login', userData)
      .subscribe({
        next: (response: any) => {
          // Handle successful login
          console.log('Login successful', response);
        },
        error: (error: any) => {
          // Handle login error
          console.error('Login error', error);
        }
      });
  }
}
