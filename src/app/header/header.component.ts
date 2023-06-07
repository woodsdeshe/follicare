import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSignUpCollapsed: boolean = true;
  isLoginCollapsed: boolean = true;

  toggleSignUp() {
    this.isSignUpCollapsed = !this.isSignUpCollapsed;
    this.isLoginCollapsed = true;
  }

  toggleLogin() {
    this.isSignUpCollapsed = true;
    this.isLoginCollapsed = !this.isLoginCollapsed;
  }
}