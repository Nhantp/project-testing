import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Brand} from '../../../model/brand';
import Swal from 'sweetalert2';
import {AuthService} from "../../../model/security/service/auth.service";
import {EmployeeService} from "../../../model/user-detail/service/infor-user.service";
import {tokenStorageService} from "../../../model/security/service/token-storage.service";
import {shareService} from "../../../model/security/service/share.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchForm: FormGroup;
  @ViewChild('view') view: ElementRef;
  userRole: string;

  constructor(private productService: ProductService,
              private authService: AuthService,
              private tokenStorageService: tokenStorageService,
              private employeeService: EmployeeService,
              private share: shareService) {
  }
  brands: Brand [] = [];
  products: Product [] = [];
  chooseProductId = 0;
  chooseProductName = '';
  totalPages = 0;
  currentPage = 0;
  pageSize = 0;
  check: boolean;
  brand: string;
  price: string;
  name: string;
  sort: string;


  ngOnInit(): void {
      this.userRole = this.tokenStorageService.getRole()?.authority || 'USER';
    this.getProductList('', '', '', '', false);
    this.searchForm = new FormGroup({
      brand: new FormControl(''),
      price: new FormControl(''),
      name: new FormControl('', [Validators.maxLength(30)], ),
    });
  }

  doDelete(deleteProductId: number) {
    this.productService.deleteProduct(deleteProductId).subscribe(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đã xóa thành công',
        showConfirmButton: false,
        timer: 1500,
      });
      this.searchProductList();
    });
  }

  getProductList(brandName: string, sellingPrice: string, productName: string, sort: string, check: boolean) {
    this.brand = brandName;
    this.price = sellingPrice;
    this.name = productName;
    if (sort === '') {
      sort = 'product_id';
    }
    this.sort = sort;
    if (check === true) {
      this.productService.getResponseProduct(brandName, sellingPrice, productName, 1, 8, sort, true).subscribe((response: any) => {
        if (response == null) {
          this.brands = [];
          this.products = [];
          this.totalPages = 0;
          this.currentPage = 0;
          this.pageSize = 0;
        } else {
          this.products = response.productPage.content;
          this.brands = response.brandList;
          this.totalPages = response.productPage.totalPages;
          this.currentPage = response.productPage.number;
          this.pageSize = response.productPage.size;
        }
      });
      this.check = check;
    } else if (check === false) {
      {
        this.productService.getResponseProduct(brandName, sellingPrice, productName, 1, 8, sort, false).subscribe((response: any) => {
          if (response == null) {
            this.brands = [];
            this.products = [];
            this.totalPages = 0;
            this.currentPage = 0;
            this.pageSize = 0;
          } else {
            this.products = response.productPage.content;
            this.brands = response.brandList;
            this.totalPages = response.productPage.totalPages;
            this.currentPage = response.productPage.number;
            this.pageSize = response.productPage.size;
          }
        });
        this.check = check;
      }
    }
  }

  searchProductList() {
    this.brand = this.searchForm.value.brand;
    this.price = this.searchForm.value.price;
    this.name = this.searchForm.value.name;
    this.sort = 'product_id';
    this.productService.getResponseProduct(this.brand, this.price, this.name, 1, 8, this.sort, true).subscribe((response: any) => {
      if (response == null) {
        this.brands = [];
        this.products = [];
        this.totalPages = 0;
        this.currentPage = 0;
        this.pageSize = 0;
      } else {
        this.products = response.productPage.content;
        this.brands = response.brandList;
        this.totalPages = response.productPage.totalPages;
        this.currentPage = response.productPage.number;
        this.pageSize = response.productPage.size;
      }
    });
    this.check = true;
    console.log(this.products)
  }

  findProduct(productId, productName) {
    this.chooseProductId = productId;
    this.chooseProductName = productName;
  }

  onPrevPage() {
    if (this.currentPage > 0) {
      this.productService.getResponseProduct(this.brand, this.price, this.name, this.currentPage,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.products = response.productPage.content;
        this.brands = response.brandList;
        this.totalPages = response.productPage.totalPages;
        this.currentPage = response.productPage.number;
        this.pageSize = response.productPage.size;
      });
    }
    this.view.nativeElement.scrollIntoView();
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.productService.getResponseProduct(this.brand, this.price, this.name, this.currentPage + 2,
        this.pageSize, this.sort, this.check).subscribe((response: any) => {
        this.products = response.productPage.content;
        this.brands = response.brandList;
        this.totalPages = response.productPage.totalPages;
        this.currentPage = response.productPage.number;
        this.pageSize = response.productPage.size;
      });
    }
    this.view.nativeElement.scrollIntoView();
  }

}
