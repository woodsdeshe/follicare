import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/register.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: any; // Placeholder for user profile data

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      this.authService.getUserProfile(userId).subscribe(
        (response: any) => {
          this.userProfile = response;
        },
        (error: any) => {
          console.error("Couldn't fetch user profile");
        }
      );
    }
  }
  

  getUserProfile(): void {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      // Make an API call or fetch user profile data based on the userId
      // For example, you can use the authService to fetch the profile data
      this.authService.getUserProfile(userId).subscribe(
        (response: any) => {
          this.userProfile = response; // Assign the fetched profile data to userProfile variable
        },
        (error: any) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
  }
}
