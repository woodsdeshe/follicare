import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})
export class HomeInfoComponent {
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
}
