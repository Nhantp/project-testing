import {Component, OnInit} from '@angular/core';
import {Brand} from '../../../model/brand';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: any;
  brandList: Brand;
  validation_messages: any;
  isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  edit() {

  }
  showPreview() {}
}
