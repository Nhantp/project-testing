import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
import {Page} from '../../model/page';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private API_URL_CREATE_PRODUCT = 'http://localhost:8080/product/create-product';
  private API_URL_EDIT_PRODUCT = 'http://localhost:8080/product//edit-product/';
  private API_URL_FIND_BY_ID = 'http://localhost:8080/api/product';
  private API_URL_LIST = 'http://localhost:8080/api/product/list';


  constructor(private httpClient: HttpClient) {
  }

  deleteProduct(id: any): Observable<any> {
    return this.httpClient.delete( this.API_URL_FIND_BY_ID + id);
  }

  getProductById(id: any): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL_FIND_BY_ID + id);
  }

  getProductList(brandName: string, sellingPrice: string, productName: string, productCpu: string,
                 currentPage: number, pageSize: number, sort: string, direction: boolean, isOnSaleScreen: boolean): Observable<any> {
    console.log('ddax vao getProductList');
    return this.httpClient.get(this.API_URL_LIST + '?brandName=' + brandName +
      '&sellingPrice=' + sellingPrice + '&productName=' + productName + '&productCpu=' + productCpu +
      '&page=' + currentPage + '&size=' + pageSize + '&sort=' + sort + '&direction=' + direction + '&isOnSaleScreen=' + isOnSaleScreen);
  }
  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API_URL_FIND_BY_ID + '/' + id);
  }

}
