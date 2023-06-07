import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private http: HttpClient) {}

login(email: string, password: string): Observable<string> {
  const credentials = { email: email, password: password };

  return this.http.post<any>('http://localhost:8080/auth/users/login', credentials).pipe(map(response => response.token)
  );
}
}
