import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Brand} from '../../../model/brand';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  public brandList: Brand[];
  public categoryList: Category[];
  productForm: FormGroup;
  public check = false;
  isLoading = false;
  constructor() {
  }

  ngOnInit(): void {
  }

  validation_messages = {
    productName: [
      {type: 'required', message: 'Tên sản phẩm không được để trống'},
      {type: 'minlength', message: 'Tên sản phẩm phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Tên sản phẩm phải nhỏ hơn 50 ký tự'},
      {type: 'pattern', message: 'Tên sản phẩm không được chứa ký tự đặc biệt'}
    ],
    sellingPrice: [
      {type: 'required', message: 'Giá bán không được để trống'},
      {type: 'pattern', message: 'Giá bán không được chứa ký tự đặc biệt'},
      {type: 'min', message: 'Giá bán phải lớn hơn 0'},
      {type: 'pattern', message: 'Giá bán không được chứa ký tự đặc biệt'}
    ],
    screenSize: [
      {type: 'required', message: 'Kích thước màn hình không được để trống'},
      {type: 'pattern', message: 'Kích thước màn hình không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Kích thước màn hình phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Kích thước màn hình phải nhỏ hơn 50 ký tự'}
    ],
    fontCamera: [
      {type: 'required', message: 'Camera trước không được để trống'},
      {type: 'pattern', message: 'Camera trước không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Camera trước phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Camera trước phải nhỏ hơn 50 ký tự'}
    ],
    backCamera: [
      {type: 'required', message: 'Camera sau không được để trống'},
      {type: 'pattern', message: 'Camera sau không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Camera sau phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Camera sau phải nhỏ hơn 50 ký tự'}
    ],
    productCpu: [
      {type: 'required', message: 'CPU không được để trống'},
      {type: 'pattern', message: 'CPU không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'CPU phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'CPU phải nhỏ hơn 50 ký tự'}
    ],
    productStorage: [
      {type: 'required', message: 'Bộ nhớ không được để trống'},
      {type: 'pattern', message: 'Bộ nhớ không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Bộ nhớ phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Bộ nhớ phải nhỏ hơn 50 ký tự'}
    ],
    description: [
      {type: 'required', message: 'Mô tả không được để trống'},
      {type: 'pattern', message: 'Mô tả không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Mô tả phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Mô tả phải nhỏ hơn 50 ký tự'}],
    category: [
      {type: 'required', message: 'Danh mục không được để trống'},
      {type: 'pattern', message: 'Danh mục không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Danh mục phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Danh mục phải nhỏ hơn 50 ký tự'}
    ],
    brand: [
      {type: 'required', message: 'Thương hiệu không được để trống'},
      {type: 'pattern', message: 'Thương hiệu không được chứa ký tự đặc biệt'},
      {type: 'minlength', message: 'Thương hiệu phải lớn hơn 5 ký tự'},
      {type: 'maxlength', message: 'Thương hiệu phải nhỏ hơn 50 ký tự'}
    ],
  };
  // productCreateForm: FormGroup = new FormGroup({
  //   productName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50),
  //
  // });

  showPreview($event: Event) {

  }

  create() {

  }
}
