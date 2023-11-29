import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tokenStorageService} from "../../security/service/token-storage.service";
import {Observable} from "rxjs";
import {Role} from "../module/role";
import {User} from "../module/user";
import {Employee} from "../module/employee";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = "http://localhost:8080/api/auth"

  constructor(private httpClient: HttpClient,
              private storageService: tokenStorageService) {
  }

    addEmployee(employee: Employee): Observable<Employee> {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}/signUp`;
    return this.httpClient.post<Employee>(url,employee, {headers});
  }

  getRoles(): Observable<Role[]> {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}/roles`;
    return this.httpClient.get<Role[]>(url, {headers});
  }

  checkExistingUsername(username: string): Observable<boolean> {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}/checkExistingUsername?username=${username}`;
    return this.httpClient.get<boolean>(url, {headers});
  }

  checkExistingEmail(email: string): Observable<boolean> {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}/checkExistingEmail?email=${email}`;
    return this.httpClient.get<boolean>(url, {headers});
  }

  checkCurrentPassword(changePasswordData: any): Observable<boolean> {
    const token = this.storageService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.API_URL}/checkCurrentPassword`;
    return this.httpClient.post<boolean>(url, changePasswordData, { headers });
  }
}
