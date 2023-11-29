import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/auth/inforEmployee';

  constructor(private httpClient: HttpClient) { }

  // Gửi yêu cầu GET để lấy thông tin người dùng từ máy chủ
    getEmployeeByUsername(username: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}?username=${username}`);
  }
}
