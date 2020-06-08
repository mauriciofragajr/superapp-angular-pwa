import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router) {
    this.userSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.userSubject.asObservable();
  }

  public get getUser(): User {
    return this.userSubject.value;
  }

  setUser(token: string) {
    const newUser: User = { token }
    this.userSubject.next(newUser);
    this.router.navigate(['/home']);
  }

  toLoginPage() {
    window.location.replace(`${environment.authServiceUrl}/auth?appId=${environment.authServiceAppId}`);
  }

  logout() {
    this.userSubject.next(null);
    window.location.replace(`${environment.authServiceUrl}/auth/logout`);
  }
}
