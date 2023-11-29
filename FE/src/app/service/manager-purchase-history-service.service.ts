import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ManagerPurchaseHistory} from '../model/manager-purchase-history';
import {Page} from '../model/page';
import {DetailHistory} from '../model/detail-history';

@Injectable({
  providedIn: 'root'
})
export class ManagerPurchaseHistoryServiceService {

  API = 'http://localhost:8080/api/managerPurchaseHistory';
  constructor(private httpClient: HttpClient) { }
  getAllManagerPurchaseHistory(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=' , {params});
  }
  sortByCustomerNameASC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=customerNameASC', {params});
  }
  sortByCustomerNameDESC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=customerNameDESC', {params});
  }
  sortByProductNameDESC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=productNameDESC', {params});
  }
  sortByProductNameASC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=productNameASC', {params});
  }
  sortByTotalPriceDESC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=totalPriceDESC', {params});
  }
  sortByTotalPriceASC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=totalPriceASC', {params});
  }
  sortByDateOutputInvoiceDESC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=timeDESC', {params});
  }
  sortByDateOutputInvoiceASC(pageNo: number, pageSize: number): Observable<Page<ManagerPurchaseHistory>> {
    const params = new HttpParams()
      .set('pageNo', pageNo.toString())
      .set('pageSize', pageSize.toString());
    return this.httpClient.get<Page<ManagerPurchaseHistory>>(this.API + '?sort=timeASC', {params});
  }
  findById(id: number): Observable<DetailHistory[]> {
    return this.httpClient.get<DetailHistory[]>(`${this.API}/${id}`)  ;
  }
}
