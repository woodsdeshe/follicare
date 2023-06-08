import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


const AUTH_API = 'http://localhost:8080/api/auth/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
      tap((response: any) => {
        // Store the token in localStorage
        localStorage.setItem('token', response.token);
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

  getUserProfile(): Observable<any> {
    const apiUrl = AUTH_API + 'profile';
    return this.http.get(apiUrl, httpOptions);
  }
}
