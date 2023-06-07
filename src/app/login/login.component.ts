import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register.service';
import { SharedService } from '../shared.service';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService, private sharedService: SharedService, private router: Router) {
    this.sharedService.showLogin$.subscribe((showLogin: boolean) => {
      this.showLogin = showLogin;
    })
  }

  showLogin: boolean = false;

  loginData = {
    email: '',
    password:''
  };

  submitLoginForm() {
    console.log('Login form submitted');
    console.log(this.loginData);
    
    this.loginData = {
      email: '',
      password: ''
    };
    this.showLogin = false;
  }

  login() {
    const apiUrl = 'http://localhost:8080/auth/users/login';

    const loginData = {
      apiUrl: apiUrl,
      userData: this.loginData
    };



    const observer: Observer<any> = {
      next: (response) => {
        console.log('Login complete');
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.log('Login error');
      },
      complete: () => {
      }
    };

    this.authService.login(loginData).subscribe(observer);
  }

  ngOnInit(): void {
      this.sharedService.showLogin$.subscribe((showLogin) => {
        this.showLogin = showLogin;
      })
  }

}
