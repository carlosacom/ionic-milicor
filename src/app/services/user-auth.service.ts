import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  constructor(
    private router: Router
  ) { }

  login(dataUser: any) {
    this.setToken(dataUser.token);
    this.setUser(dataUser.user);
  }

  logout() {
    localStorage.removeItem(environment.token);
    localStorage.removeItem(environment.user);
    this.router.navigate(['/']);
  }

  setToken(token: string) {
    localStorage.setItem(environment.token, token);
  }

  setUser(user: object) {
    localStorage.setItem(environment.user, JSON.stringify(user));
  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem(environment.user));
    if(identity === 'undefined') {
      identity = null;
    }
    return identity;
  }

  getToken() {
    let token = localStorage.getItem(environment.token);
    if(token === 'undefined') {
      token = null;
    }
    return token;
  }
}
