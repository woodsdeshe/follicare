import { Component } from '@angular/core';
import { AuthService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private authService: AuthService, private router: Router) {}

showSignUp: boolean = false;
  signUpData = {
    email: '',
    password: ''
  };

  showSignUpForm() {
    this.router.navigate(['/register']);
  }

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
  const newUserData = {email: 'head@honcho.com', password: 'honcho'};

  this.authService.register(newUserData).subscribe((response) => {
    console.log('Registration complete');
     });
  }

  
}
