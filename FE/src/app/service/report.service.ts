import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Report} from "../model/report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  apiUrl = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  sendReportData(data: Report): Observable<any>{
    const apiurl = `${this.apiUrl}/api/report`;
    return this.http.post(apiurl,data)
  }
}
