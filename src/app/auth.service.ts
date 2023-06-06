import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth/users';

  constructor(private http: HttpClient) { }

  register(newUserData: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, newUserData);
  }

  login(credentials: any): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, credentials);
  }
}
