import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth/users';
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { }

  register(newUserData: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, newUserData);
  }

  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }

  setJwtToken(token: string): void {
    this.headers = this.headers.set('Authorization', `Bearer ${token}`);
  }

  getHeaders(): HttpHeaders {
    return this.headers;
  }
}
