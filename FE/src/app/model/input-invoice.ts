import {Supplier} from './supplier';

export interface InputInvoice {
inputInvoiceId?: number;
  inputInvoiceDate: Date;
  supplier: Supplier;
}
