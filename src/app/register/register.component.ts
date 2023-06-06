import { Component } from '@angular/core';
import { AuthService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
constructor(private authService: AuthService) {}

register() {
  const newUserData = { userName: 'bigDog7', email: 'head@honcho.com', password: 'honcho'};

  this.authService.register(newUserData).subscribe((response) => {
    console.log('Registration complete');
     });
  }

  
}
