import {Customer} from './customer';

export class OutputInvoice {
  paymentMethod: string;
  totalPrice: number;
  dateOutputInvoice: Date;
  customer: Customer;
}
