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
    this.route.queryParams.subscribe(params => {
      this.partialTitle = params['partialTitle'];
      if (this.partialTitle) {
        this.fetchResources();
      } else {
        this.fetchAllResources();
      }
    });
  }
  

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
