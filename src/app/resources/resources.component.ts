import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.fetchResources();
  }

  fetchResources(): void {
    this.http.get<any[]>('http://localhost:8080/api/resources/all')
    .subscribe(
      response => {
        this. resources = response;
      },
      error => {
        console.error("Couldn't get resources")
      }
    )
  }
}
