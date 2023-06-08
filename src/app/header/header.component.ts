import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showLoginComponent = false;
  showRegisterComponent = false;

  showLogin() {
    this.showLoginComponent = true;
    this.showRegisterComponent = false;
  }

  showRegister() {
    this.showRegisterComponent = true;
    this.showLoginComponent = false;
  }

  toggleLogin() {
    this.showLoginComponent = !this.showLoginComponent;
    this.showRegisterComponent = false;
  }
  
  toggleRegister() {
    this.showRegisterComponent = !this.showRegisterComponent;
    this.showLoginComponent = false;
  }
}
