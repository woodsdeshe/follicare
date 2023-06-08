import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe(
      (data: any) => {
        this.userProfile = data;
      },
      (error: any) => {
        console.log('Error retrieving user profile:', error);
      }
    );
  }
}
