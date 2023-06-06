import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
private showSignUpSource = new Subject<boolean>();
showSignUp$ = this.showSignUpSource.asObservable();

toggleSignUp(showSignUp: boolean) {
  this.showSignUpSource.next(showSignUp);
}
}
