import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<User | null>(null);
  private _isLoggedIn = signal<boolean>(false);


  get isLoggedIn() {
    return this._isLoggedIn;
  }

  login() {
    //  OAuth
    this._isLoggedIn.set(true);
  }

  setUser(user: User) {
    this.user.set(user);
  }

  logout() {
    this._isLoggedIn.set(false);
  }
}

