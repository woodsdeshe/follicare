import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  /**
   * Clears the session storage.
   */
  clean(): void {
    window.sessionStorage.clear();
  }

  /**
   * Saves the user data to the session storage.
   * @param user The user data to be saved
   */
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  /**
   * Retrieves the user data from the session storage.
   * @returns The user data, or an empty object if not found
   */
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  /**
   * Checks if a user is logged in by checking the session storage for user data.
   * @returns True if a user is logged in, false otherwise
   */
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
