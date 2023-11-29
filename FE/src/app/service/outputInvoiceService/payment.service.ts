import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OutputInvoiceDetail} from '../../model/output-invoice-detail';
import {CustomerDto} from '../../dto/customer-dto';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private API = 'http://localhost:8080/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  constructor(private http: HttpClient) {
  }


  savePayment(customerDTO: CustomerDto, paymentMethod: string, outputInvoiceDetails: OutputInvoiceDetail[]): Observable<any> {
    return this.http.post<any>(this.API + 'payment', {
      customerDTO,
      paymentMethod,
      outputInvoiceDetails
    }, this.httpOptions);
  }

  getQuantity(productId: number): Observable<any> {
    return this.http.get(this.API + 'getQuantity' + '?productId=' + productId);
  }

}
