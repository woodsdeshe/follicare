import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.css']
})
export class SpecialistsComponent implements OnInit{
specialists: any[] = [];

constructor(private http: HttpClient) {}

ngOnInit(): void {
    this.fetchResources();
}

fetchResources(): void {
  this.http.get<any[]>('http://localhost:8080/api/specialists')
  .subscribe(
    response => {
      this.specialists = response
      console.log(response)
    },
    error => {
      console.error("Couldn't get specialists")
    }
    
  )
}
}
