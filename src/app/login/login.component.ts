import { Component } from '@angular/core';
import { AuthService } from '../services/register.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private http: HttpClient) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password)
      .subscribe(token => {
        localStorage.setItem('access_token', token);

        this.http.get('http://localhost:8080/api/profile')
          .subscribe(response => {
            // Handle the API response
            console.log('API response:', response);
          },
          error => {
            console.error('API error:', error);
          });
      });
  }
}
