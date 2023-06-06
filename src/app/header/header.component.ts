import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSignUp: boolean = false;
  constructor(private sharedService: SharedService) {
    this.sharedService.showSignUp$.subscribe((showSignUp: boolean) => {
      this.showSignUp = showSignUp;
    });
  }

  toggleSignUp() {
    this.sharedService.toggleSignUp(true);
  }

  toggleLogin() {
    this.sharedService.toggleSignUp(false);
  }

}
