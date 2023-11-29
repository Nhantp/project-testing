import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Page} from '../../model/page';
import {Supplier} from '../../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = 'http://localhost:8080/api/suppliers';
  constructor(private http: HttpClient) {}
  addNewSupplier(supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl + '/create', supplier);
  }
  findBySupplierId(supplierId: number): Observable<Supplier> {
    return this.http.get<Supplier>(this.apiUrl + '/edit/' + supplierId);
  }
  updateSupplier(supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl + '/update', supplier);
  }
  getAllSuppliers(pageNo: number, pageSize: number): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<Page<Supplier>>(this.apiUrl + '/paged', { params });
  }
  deleteSupplier(supplierId: number): Observable<void> {
    const deleteUrl = `${this.apiUrl}/delete/${supplierId}`;
    return this.http.delete<void>(deleteUrl);
  }
  searchSuppliers(
    name: string,
    address: string,
    phone: string,
    pageNo: number,
    pageSize: number
  ): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('name', name)
      .set('address', address)
      .set('phone', phone)
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<Page<Supplier>>(this.apiUrl + '/list', { params });
  }
  getSuppliers(name: string, address: string, phone: string,
               pageNo: number, pageSize: number, sort: string, direction: boolean): Observable<any> {
    return this.http.get('http://localhost:8080/api/suppliers/list?name=' +
      name + '&address=' + address + '&phone=' + phone +
      '&pageNo=' + pageNo + '&pageSize=' + pageSize + '&sort=' + sort + '&direction=' + direction);
  }
  sortByNameSupplier(
    flag: string,
    pageNo: number,
    pageSize: number
  ): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('flag', flag.toString())
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<Page<Supplier>>(this.apiUrl + '/sort/name', { params });
  }
  sortByIdSupplier(
    flag: string,
    pageNo: number,
    pageSize: number
  ): Observable<Page<Supplier>> {
    const params = new HttpParams()
      .set('flag', flag.toString())
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<Page<Supplier>>(this.apiUrl + '/sort/id', { params });
  }
  getById(id: number) {
    return this.http.get<Supplier>(this.apiUrl + '/' + id);
  }
}
