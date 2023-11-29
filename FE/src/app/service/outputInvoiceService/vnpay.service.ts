import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

class VNPayResponse {
}

@Injectable({
  providedIn: 'root'
})
export class VnpayService {
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

  submitOrder(orderTotal: number, orderInfo: string): Observable<any> {
    return this.http.post<any>(this.API + 'submitOrder?amount=' + orderTotal + '&orderInfo=' + orderInfo, {}, this.httpOptions);
  }


  getVNPayInfo(): Observable<PaymentResponse> {
    return this.http.get<PaymentResponse>(this.API + 'vnpay-payment');
  }
}
