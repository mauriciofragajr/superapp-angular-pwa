import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.userSubject.asObservable();
    const userInSession = sessionStorage.getItem('user');
    if (userInSession) {
      const user = JSON.parse(userInSession);
      this.userSubject.next(user);
    }
  }

  public get getUser(): User {
    return this.userSubject.value;
  }

  setUser(token: string) {
    const payload = this.decodePayloadJWT(token);
    const newUser: User = { token, ...payload };
    this.startSession(newUser);
    this.userSubject.next(newUser);
    this.router.navigate(['/home']);
  }

  startSession(user) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  clearSession() {
    sessionStorage.clear();
  }

  toLoginPage() {
    window.location.replace(`${environment.authServiceUrl}/auth?appId=${environment.authServiceAppId}`);
  }

  logout() {
    this.clearSession();
    this.userSubject.next(null);
    window.location.replace(`${environment.authServiceUrl}/auth/logout`);
  }

  decodePayloadJWT(token): User | null {
    try {
      return jwt_decode(token);
    } catch (err) {
      return null;
    }
  }
}
