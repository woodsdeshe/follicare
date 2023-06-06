import { Component } from '@angular/core';
import { AuthService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    const loggedInUser = {email: 'head@honcho.com', password: 'honcho'};

    this.authService.login(loggedInUser).subscribe((response) => {console.log('Login complete');
    const token = response.token;
    this.authService.setJwtToken(token);
   });
  }

}
