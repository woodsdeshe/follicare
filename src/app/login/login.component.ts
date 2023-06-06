import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register.service';
import { SharedService } from '../shared.service';
import { Observer } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private authService: AuthService) {}

  login() {
    const loggedInUser = {email: 'head@honcho.com', password: 'honcho'};

    this.authService.login(loggedInUser).subscribe((response) => {console.log('Login complete');
    const token = response.token;
    this.authService.setJwtToken(token);
   });
  }

}
