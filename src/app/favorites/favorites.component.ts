import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe(params => {
      const userId = params['userId'];
      if (userId) {
        this.fetchFavorites(userId);
      }
    });
  }
  

  fetchFavorites(userId: string): void {
    const apiUrl = `http://localhost:8080/auth/users/${userId}/favorites`;
    this.http.get<any[]>(apiUrl).subscribe(
      response => {
        this.favorites = response;
        console.log(response);
      },
      error => {
        console.error("Couldn't get favorites");
      }
    );
  }
  
  
}
