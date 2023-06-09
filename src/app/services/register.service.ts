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

  /**
   * Sends a login request with the provided email and password.
   * Stores the received token in the local storage.
   * @param email The user's email
   * @param password The user's password
   * @returns An Observable containing the response
   */
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

  /**
   * Sends a registration request with the provided email and password.
   * @param email The user's email
   * @param password The user's password
   * @returns An Observable containing the response
   */
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

  /**
   * Retrieves the user's profile from the API.
   * @returns An Observable containing the user profile data
   */
  getUserProfile(): Observable<any> {
    const apiUrl = AUTH_API + 'profile';
    return this.http.get(apiUrl, httpOptions);
  }
}
