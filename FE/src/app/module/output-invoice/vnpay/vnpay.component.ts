import { Component, OnInit } from '@angular/core';
import {VnpayService} from '../../../service/outputInvoiceService/vnpay.service';
import {OrderService} from '../../../service/outputInvoiceService/order.service';



@Component({
  selector: 'app-vnpay',
  templateUrl: './vnpay.component.html',
  styleUrls: ['./vnpay.component.css']
})
export class VNPayComponent implements OnInit {
  orderTotal: number;
  orderInfo: string;
  formattedOrderTotal: string;
  errorMessage: string | null = null;

  constructor(private vnpayService: VnpayService,
              private orderService: OrderService) {

  }
  ngOnInit() {
    this.orderTotal = this.orderService.getData();
    this.formattedOrderTotal = this.formatCurrency(this.orderTotal);
  }

  // The function redirects to the payment execution page
  submitOrder() {
    this.vnpayService.submitOrder(this.orderTotal, this.orderInfo).subscribe(
      (response) => {
        if (response && response.vnpayUrl) {
          window.location.href = response.vnpayUrl;
        } else {
        }
      },
    );
  }
  private formatCurrency(num: number): string {
    return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

  validateOrderInfo() {
    const orderInfo = this.orderInfo;
    if (!orderInfo) {
      this.errorMessage = 'Trường này không được để trống';
    } else if (/[^a-zA-Z0-9\s]+/u.test(orderInfo)) {
      this.errorMessage = 'Không được nhập ký tự đặc biệt';
    } else {
      this.errorMessage = '';
    }
  }
}
