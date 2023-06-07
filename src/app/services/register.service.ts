import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const AUTH_API = 'http://localhost:8080/api/auth/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {
constructor(private http: HttpClient) {}

login(email: string, password: string): Observable<any> {
  const credentials = { email: email, password: password };

  return this.http.post(
    AUTH_API + 'login',
    credentials,
    httpOptions
  ).pipe(
    map((response: any) => {
      const token = response.access_token; // Assuming the token is returned as 'access_token'
      if (token) {
        localStorage.setItem('access_token', token); // Store the token in local storage
      }
      return response;
    })
  );
}



  register(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        email,
        password,
      },
      httpOptions
    );
  }
}
