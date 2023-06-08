import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private showSignUpSource = new Subject<boolean>();
private showLoginSource = new Subject<boolean>();

showSignUp$ = this.showSignUpSource.asObservable();
showLogin$ = this.showLoginSource.asObservable();

toggleSignUp(showSignUp: boolean) {
  this.showSignUpSource.next(showSignUp);
  this.showLoginSource.next(!showSignUp);
}
}
