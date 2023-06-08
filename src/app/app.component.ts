import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isMainPage!: boolean;

  constructor(private router: Router) {
    // Subscribe to router events to determine the current page
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current URL is '/main' to determine if it is the main page
        this.isMainPage = event.url === '/main';
      }
    });
  }

}
