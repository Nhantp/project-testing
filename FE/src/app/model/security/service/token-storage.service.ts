import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'auth-role';
const NAME_KEY ='name-key';

@Injectable({
  providedIn: 'root'
})
export class tokenStorageService {

  signOut() {
    window.localStorage.removeItem('auth-token');
    window.sessionStorage.removeItem('auth-token');
    window.localStorage.removeItem('auth-role');
    window.sessionStorage.removeItem('auth-role');
    window.localStorage.removeItem('name-key');
    window.sessionStorage.removeItem('name-key');
  }


  public saveTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserLocal(user) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveRoleLocal(role) {
    window.localStorage.removeItem(ROLE_KEY);
    window.localStorage.setItem(ROLE_KEY, JSON.stringify(role));
  }

  public saveTokenSession(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserSession(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveRoleSession(role) {
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY, JSON.stringify(role));
  }
  public saveNameLocal(name: string) {
    window.localStorage.removeItem(NAME_KEY);
    window.localStorage.setItem(NAME_KEY, JSON.stringify(name));
  }

  public saveNameSession(name: string) {
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY, JSON.stringify(name));
  }

  public getToken(): string {
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      return localStorage.getItem(TOKEN_KEY);
    } else {
      return sessionStorage.getItem(TOKEN_KEY);
    }
  }

  getUser() {
    const userData = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
    if (userData) {
      return JSON.parse(userData);
    } else {
      return null;
    }
  }

  getRole() {
    if (localStorage.getItem(ROLE_KEY) !== null) {
      return JSON.parse(localStorage.getItem(ROLE_KEY));
    } else {
      return JSON.parse(sessionStorage.getItem(ROLE_KEY));
    }
  }

  getName() {
    const nameData = localStorage.getItem(NAME_KEY) || sessionStorage.getItem(NAME_KEY);
    if (nameData) {
      return JSON.parse(nameData);
    } else {
      return null;
    }
  }

  static getToken() {
    if (localStorage.getItem(TOKEN_KEY) !== null) {
      return localStorage.getItem(TOKEN_KEY);
    } else {
      return sessionStorage.getItem(TOKEN_KEY);
    }
  }
}

