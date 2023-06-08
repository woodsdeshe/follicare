import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit {
  specialists: any[] = [];
  specialty: string = '';
  zipCode: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  /**
   * Initializes the component.
   * Retrieves the specialty and zip code from query parameters and fetches specialists accordingly.
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.specialty = params['specialty'];
      this.zipCode = params['zipCode'];
      if (this.specialty || this.zipCode) {
        this.fetchSpecialists();
      } else {
        this.fetchAllSpecialists();
      }
    });
  }

  /**
   * Fetches all specialists.
   * Sends an HTTP GET request to the server to retrieve all specialists.
   */
  fetchAllSpecialists(): void {
    this.http.get<any[]>('http://localhost:8080/api/specialists').subscribe(
      response => {
        this.specialists = response;
        console.log(response);
      },
      error => {
        console.error("Couldn't get specialists");
      }
    );
  }

  /**
   * Fetches specialists based on search criteria.
   * Sends an HTTP GET request to the server with the specified specialty and/or zip code as query parameters.
   */
  fetchSpecialists(): void {
    let apiUrl = 'http://localhost:8080/api/specialists';

    if (this.specialty && this.zipCode) {
      apiUrl += `?specialty=${this.specialty}&zipCode=${this.zipCode}`;
    } else if (this.specialty) {
      apiUrl += `?specialty=${this.specialty}`;
    } else if (this.zipCode) {
      apiUrl += `?zipCode=${this.zipCode}`;
    }

    this.http.get<any[]>(apiUrl).subscribe(
      response => {
        this.specialists = response;
        console.log(response);
      },
      error => {
        console.error("Couldn't get specialists");
      }
    );
  }
}
