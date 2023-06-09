import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: any[] = [];
  partialTitle: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.partialTitle = '';
  }

  ngOnInit(): void {
    // Subscribe to query params changes
    this.route.queryParams.subscribe(params => {
      this.partialTitle = params['partialTitle'];
      if (this.partialTitle) {
        // Fetch resources based on partial title if provided
        this.fetchResources();
      } else {
        // Fetch all resources if no partial title is provided
        this.fetchAllResources();
      }
    });
  }
  
  /**
   * Fetches all resources from the API
   */
  fetchAllResources(): void {
    this.http.get<any[]>('http://localhost:8080/api/resources/all')
      .subscribe(
        response => {
          this.resources = response;
          console.log(response);
        },
        error => {
          console.error("Couldn't get resources");
        }
      );
  }

  /**
   * Fetches resources based on partial title from the API
   */
  fetchResources(): void {
    let apiUrl = 'http://localhost:8080/api/resources';
  
    if (this.partialTitle && this.partialTitle !== '') {
      apiUrl += `?partialTitle=${this.partialTitle}`;
    }
  
    this.http.get<any[]>(apiUrl)
      .subscribe(
        response => {
          this.resources = response;
          console.log(response);
        },
        error => {
          console.error("Couldn't get resources");
        }
      );
  }
}
