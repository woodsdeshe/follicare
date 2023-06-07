import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit{
specialists: any[] = [];
specialty: string = '';
zipCode: string = '';

constructor(private http: HttpClient, private route: ActivatedRoute) {}

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

fetchAllSpecialists(): void {
  this.http.get<any[]>('http://localhost:8080/api/specialists')
  .subscribe(
    response => {
      this.specialists = response
      console.log(response)
    },
    error => {
      console.error("Couldn't get specialists")
    }
     );
    }

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
