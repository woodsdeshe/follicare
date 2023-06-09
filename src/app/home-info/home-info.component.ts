import { Component } from '@angular/core';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css'],
})
export class HomeInfoComponent {
  showLoginComponent = false;
  showRegisterComponent = false;
  visibleItems: boolean[] = [];

  /**
   * Shows the login component and hides the register component.
   */
  showLogin() {
    this.showLoginComponent = true;
    this.showRegisterComponent = false;
  }

  /**
   * Shows the register component and hides the login component.
   */
  showRegister() {
    this.showRegisterComponent = true;
    this.showLoginComponent = false;
  }
}
