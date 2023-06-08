import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showLoginComponent = false;
  showRegisterComponent = false;

  /**
   * Sets the showLoginComponent property to true and showRegisterComponent property to false,
   * displaying the login component and hiding the register component.
   */
  showLogin() {
    this.showLoginComponent = true;
    this.showRegisterComponent = false;
  }

  /**
   * Sets the showRegisterComponent property to true and showLoginComponent property to false,
   * displaying the register component and hiding the login component.
   */
  showRegister() {
    this.showRegisterComponent = true;
    this.showLoginComponent = false;
  }

  /**
   * Toggles the showLoginComponent property, switching its value between true and false,
   * and sets the showRegisterComponent property to false, hiding the register component.
   */
  toggleLogin() {
    this.showLoginComponent = !this.showLoginComponent;
    this.showRegisterComponent = false;
  }
  
  /**
   * Toggles the showRegisterComponent property, switching its value between true and false,
   * and sets the showLoginComponent property to false, hiding the login component.
   */
  toggleRegister() {
    this.showRegisterComponent = !this.showRegisterComponent;
    this.showLoginComponent = false;
  }
}
