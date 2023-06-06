import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should register a new user', () => {
    const userData = { username: 'john', password: 'password' };

    service.register(userData).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const request = httpMock.expectOne('http://your-java-api.com/auth/register');
    expect(request.request.method).toBe('POST');
    request.flush({ status: 'success' });
  });

  it('should log in a user', () => {
    const credentials = { username: 'john', password: 'password' };

    service .login(credentials).subscribe((response) => {
      expect(response).toBeTruthy();
    });

    const request = httpMock.expectOne('http://your-java-api.com/auth/login');
    expect(request.request.method).toBe('POST');
    request.flush({ status: 'success' });
  });
});
