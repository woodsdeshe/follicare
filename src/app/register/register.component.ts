import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register.service';
import { SharedService } from '../shared.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
constructor(private authService: AuthService, private sharedService: SharedService) {}

showSignUp: boolean = false;
  
signUpData = {
    email: '',
    password: ''
  };

  submitSignUpForm() {
    console.log('Sign Up Form submitted');
    console.log(this.signUpData);

    this.signUpData = {
      email: '',
      password: ''
    };
    this.showSignUp = false;
  }

register() {
  const apiUrl = 'http://localhost:8080/auth/users/register';

  const registrationData = {
    apiUrl: apiUrl,
    userData: this.signUpData
  };

  
  const observer: Observer<any> = {
    next: (response) => {
      console.log('Registration complete');
    },
    error: (err) => {
      console.log('Registration error');
    },
    complete: () => {
    }
  };

  this.authService.register(registrationData).subscribe(observer);
}

  ngOnInit() {
    this.sharedService.showSignUp$.subscribe((showSignUp) => {
      this.showSignUp = showSignUp;
    })
  }
  
}
