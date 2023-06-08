import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/register.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  content?: string;
  isSideBarCollapsed: boolean = true;
  userProfile: any;

  constructor(private router: Router, private authService: AuthService) {}


  toggleSidebar(): void {
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(
      (response: any) => {
        this.userProfile = response;
        console.log('User Profile:', this.userProfile);

      },
      (error: any) => {
        console.error("Couldn't fetch user profile");
      }
    );
  }
  
}

