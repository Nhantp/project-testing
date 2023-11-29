import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {InputInvoiceDetail} from '../../model/input-invoice-detail';
import {Page} from '../../model/page';
import {ProductInputDto} from '../../dto/ProductInputDto';

@Injectable({
  providedIn: 'root'
})
export class InputInvoiceDetailService {
 private readonly URL_API = 'http://localhost:8080/input-invoice';

  constructor(private http: HttpClient) { }

  getInputInvoiceList(supplierName:string,productName:string,startDate:string,endDate:string,pageNo:number) {
    if (supplierName === undefined){supplierName = ''}
    if (productName === undefined){productName = ''}
    if (startDate === undefined){startDate = ''}
    if (endDate === undefined){endDate = ''}
    return this.http.get<Page<InputInvoiceDetail>>(this.URL_API  +'/list?'
      + 'supplierName='+supplierName+'&productName='+productName+'&startDate='+startDate+'&endDate='+endDate
      + '&pageNo=' + pageNo);
  }
  search(supplierName:string,productName:string,startDate:string,endDate:string,pageNo:number){
    if (supplierName === undefined){supplierName = ''}
    if (productName === undefined){productName = ''}
    if (startDate === undefined){startDate = ''}
    if (endDate === undefined){endDate = ''}
    return this.http.get<Page<InputInvoiceDetail>>(this.URL_API  +'/list?'
    + 'supplierName='+supplierName+'&productName='+productName+'&startDate='+startDate+'&endDate='+endDate
    + '&pageNo=' + pageNo);

  }
  validateInputDetail(inputDetail: ProductInputDto) {
    return this.http.post<ProductInputDto>(this.URL_API + '/' + 'validate', inputDetail);
  }
  addInputInvoiceDetail(productInput: ProductInputDto[]) {
   return this.http.post<ProductInputDto>(this.URL_API + '/' + 'new-input-invoice-detail', productInput);
  }
}
