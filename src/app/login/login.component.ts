import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';


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

        const headers = new HttpHeaders({
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        });
        const options = { headers: headers };
        
    
        this.http.get('http://localhost:8080/api/profile', options)
          .subscribe(response => {
            // Handle the API response
            console.log('API response:', response);
          },
          error => {
            console.error('API error:', error);
          }
          
          );
      
      });
  }
}
