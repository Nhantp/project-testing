import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string | Date, format: string = 'dd/MM/yyyy'): string {
    if (!value) return '';

    // Chuyển đổi giá trị ngày thành đối tượng Date nếu nó không phải là Date
    const date = value instanceof Date ? value : new Date(value);

    // Sử dụng DatePipe để định dạng ngày
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format);
  }

}
