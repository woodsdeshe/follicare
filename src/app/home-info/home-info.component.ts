import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css'],
  
})
export class HomeInfoComponent{
  showLoginComponent = false;
  showRegisterComponent = false;
  visibleItems: boolean[] = [];


  showLogin() {
    this.showLoginComponent = true;
    this.showRegisterComponent = false;
  }

  showRegister() {
    this.showRegisterComponent = true;
    this.showLoginComponent = false;
  }
 
}
