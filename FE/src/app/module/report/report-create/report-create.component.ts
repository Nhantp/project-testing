import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ReportService} from '../../../service/report.service';
import {Router} from '@angular/router';
import * as Chart from 'chart.js';
import {DatePipe} from '@angular/common';
import {Product} from '../../../model/product';
import {ProductInputDto} from '../../../dto/ProductInputDto';
import * as Highcharts from 'highcharts';

function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const selectedDate = new Date(control.value);
  const currentDate = new Date();


  if (selectedDate <= currentDate) {
    return null;
  }
  return {invalidDate: true};
}
function dateRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const fromDateControl = control.get('fromDate');
  const toDateControl = control.get('toDate');

  if (fromDateControl && toDateControl) {
    const fromDateValue = fromDateControl.value;
    const toDateValue = toDateControl.value;

    if (fromDateValue && toDateValue) {
      const fromDate = new Date(fromDateValue);
      const toDate = new Date(toDateValue);

      if (fromDate <= toDate) {
        return null;
      }
    }
  }

  return { dateRange: true };
}


@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent implements OnInit {
  private chart: Chart;
  reportTypeControlAll: boolean;
  result: any = {
    totalInvoice: 0,
    totalRevenue: 0,
  };
  fromDateValue: string;
  reportForm: FormGroup = new FormGroup({
    fromDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/), dateValidator]),
    toDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/), dateRangeValidator, dateValidator]),
    reportType: new FormControl('',[Validators.required] ),
    productId: new FormControl( '', [Validators.required, Validators.pattern(/^\d+$/)]),
  });


  constructor(private reportService: ReportService, private router: Router) {
  }

  ngOnInit(): void {
    this.reportForm = new FormGroup({
      fromDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/), dateValidator]),
      toDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-\d{2}\-\d{2}$/), dateValidator]),
      reportType: new FormControl('',[Validators.required]),
      productId: new FormControl('', [Validators.pattern(/^\d+$/)]),
    });

    this.reportForm.setValidators(dateRangeValidator);

    this.createChart(this.result);
  }
  submit() {
    if (this.reportForm.valid) {
      const data = this.reportForm.value;
      this.reportService.sendReportData(data).subscribe(
        (response) => {
          this.result = response;
          this.createChart(response);
        },
        (error => {
          console.error('Error', error);
        })
      );
    } else {

    }
  }

  onReportTypeChange() {
    const reportTypeControl = this.reportForm.get('reportType');
    const productIdControl = this.reportForm.get('productId');

    if (reportTypeControl.value === 'All') {
      productIdControl.disable();
      this.reportTypeControlAll = true;
      this.reportForm.get('productId').setValue('');
    } else {
      productIdControl.enable();
      this.reportTypeControlAll = false;
      this.reportForm.get('productId').setValue('');
    }
  }

  private createChart(result: any) {
    const totalInvoice = this.result.totalInvoice;
    const totalRevenue = this.result.totalRevenue;

    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column', // Loại biểu đồ cột
      },
      title: {
        text: 'Biểu đồ Doanh Thu',
      },
      xAxis: {
        categories: ['Doanh thu'], // Nhãn trục X
      },
      yAxis: [
        {
          title: {
            text: 'Gía trị', // Tiêu đề trục Y bên trái
          },
          labels: {
            format: '{value}', // Định dạng của nhãn trục Y bên trái
          },
        },
        {
          title: {
            text: 'Gía trị', // Tiêu đề trục Y bên phải
          },
          opposite: true, // Đặt trục Y bên trái nhưng đặt nó ở phía phải
          labels: {
            format: '{value}', // Định dạng của nhãn trục Y bên trái
          },
        },
      ],
      series: [
        {
          type: 'column',
          name: 'Số đơn hàng',
          data: [totalInvoice], // Dữ liệu Total Invoice
        },
        {
          type: 'column',
          name: 'Lợi nhuận',
          data: [totalRevenue], // Dữ liệu Total Revenue
          yAxis: 1, // Chỉ định sử dụng trục Y thứ hai (bên trái)
        },
      ],
    };



    Highcharts.chart('myChart', chartOptions);
  }

  chooseProductInPast(productEmitted: Product) {
    this.reportForm.get('productId').setValue(productEmitted.productId);
  }
}

