import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Customer} from "../../model/customer";
import {Observable} from "rxjs";
import {Page} from "../../model/page";

@Injectable({
  providedIn: 'root'
})
export class ServiceCustomerService {
  API_URl = 'http://localhost:8080/api/customer';


  constructor(private httpClient: HttpClient) {
  }

  listCustomer(pageNo: number): Observable<Page<Customer>> {
    const params = new HttpParams()
      .set('page', pageNo.toString())
    return this.httpClient.get<Page<Customer>>(this.API_URl, {params});
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URl + '/' + id);
  }

  searchAll(option: string, search: string, numberPhone: string): Observable<Page<Customer>> {
    return this.httpClient.get<Page<Customer>>(`${this.API_URl}?option=${option}&search=${search}&numberPhone=${numberPhone}`);
  }
}
