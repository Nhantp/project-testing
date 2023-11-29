import {ProductInputDto} from './ProductInputDto';
import {Supplier} from '../model/supplier';

export class InputInvoiceDto {
  productInputDto: ProductInputDto[];
  supplier: Supplier;


  constructor(productInputDto: ProductInputDto[], supplier: Supplier) {
    this.productInputDto = productInputDto;
    this.supplier = supplier;
  }
}
