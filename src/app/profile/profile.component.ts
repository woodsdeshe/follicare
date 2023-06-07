import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProfileData();
  }

  fetchProfileData(): void {
    this.http.get('http://localhost:8080/api/profile')
      .subscribe(
        (response: any) => {
          this.profileData = response;
        },
        (error: any) => {
          console.error('Error fetching profile data:', error);
        }
      );
  }
}
