import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const AUTH_API = 'http://localhost:8080/api/auth/';

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
    AUTH_API + 'signin',
    {
      email,
      password,
    },
    httpOptions
  );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        email,
        password,
      },
      httpOptions
    );
  }
}
