import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private http: HttpClient) {}

  register() {
    const userData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/auth/users/register', userData)
      .subscribe({
        next: (response: any) => {
          // Handle successful registration
          console.log('Registration successful', response);
        },
        error: (error: any) => {
          // Handle registration error
          this.errorMessage = 'Registration error';
        }
      });
  }
}
