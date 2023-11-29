import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductServiceService} from '../../../service/serviceProduct/product-service.service';
import {Product} from '../../../model/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NavigationEnd, Router} from '@angular/router';
import {ShareDataService} from '../../../service/outputInvoiceService/share-data.service';

@Component({
  selector: 'app-product-select-modal',
  templateUrl: './product-select-modal.component.html',
  styleUrls: ['./product-select-modal.component.css']
})
export class ProductSelectModalComponent implements OnInit, OnChanges {

  constructor(private productService: ProductServiceService, private router: Router, private shareData: ShareDataService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/'
        if (event.url === '/input-invoice/new') {
          this.isOnInput = true;
          this.isOnSaleScreen = false;
        } else if (event.url === '/payment') {
          this.isOnInput = false;
          this.isOnSaleScreen = true;
        } else {
          this.isOnSaleScreen = true;
        }
      }
      this.getProductList('', '', '', '', '', true, this.isOnSaleScreen);
      this.searchForm = new FormGroup({
        productName: new FormControl('', [Validators.maxLength(3)]),
      });
    });
  }
  isOnSaleScreen: boolean;
  products: Product [] = [];
  product: Product;
  chooseProductId = 0;
  chooseProductName = '';
  totalPages = 0;
  currentPage = 0;
  pageSize = 0;
  check: boolean;
  brand: string;
  price: string;
  name: string;
  cpu: string;
  sort: string;
  searchForm: FormGroup;

  @Input() reload: boolean;
  isOnInput: boolean;
  @Output() productEmitted = new EventEmitter<Product>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.reload && this.reload) {
      this.getProductList('', '', '', '', '', true, this.isOnSaleScreen);
    }
  }

  ngOnInit(): void {

  }

  doDelete(deleteProductId: number) {
    this.productService.deleteProduct(deleteProductId).subscribe(() => {
      alert('Xóa sản phẩm thành công');
      this.getProductList('', '', '', '', '', true, this.isOnSaleScreen);
    });
  }

  // tslint:disable-next-line:max-line-length
  getProductList(brandName: string, sellingPrice: string, productName: string, productCpu: string, sort: string, check: boolean, isOnSaleScreen: boolean) {
    this.brand = brandName;
    this.price = sellingPrice;
    this.name = productName;
    this.cpu = productCpu;
    if (sort === '') {
      sort = 'product_id';
    }
    this.sort = sort;
    if (check === true) {
      // tslint:disable-next-line:max-line-length
      this.productService.getProductList(brandName, sellingPrice, productName, productCpu, 1, 8, sort, true, isOnSaleScreen).subscribe((response: any) => {
        if (response == null) {

          console.log(response);

          this.products = [];
          this.totalPages = 0;
          this.currentPage = 0;
          this.pageSize = 0;
        } else {
          console.log(response);

          this.products = response.content;
          this.totalPages = response.totalPages;
          this.currentPage = response.number;
          this.pageSize = response.size;
        }
      });
      this.check = check;
    } else if (check === false) {
      {
        // tslint:disable-next-line:max-line-length
        this.productService.getProductList(brandName, sellingPrice, productName, productCpu, 1, 8, sort, false, isOnSaleScreen).subscribe((response: any) => {
          if (response == null) {
            this.products = [];
            this.totalPages = 0;
            this.currentPage = 0;
            this.pageSize = 0;
          } else {
            this.products = response.content;
            this.totalPages = response.totalPages;
            this.currentPage = response.number;
            this.pageSize = response.size;
          }
        });
        this.check = check;
      }
    }
  }

  findProduct(productId, productName) {
    this.chooseProductId = productId;
    this.chooseProductName = productName;
  }

  onPrevPage() {
    if (this.currentPage > 0) {
      this.productService.getProductList(this.brand, this.price, this.name, this.cpu, this.currentPage,
        this.pageSize, this.sort, this.check, this.isOnSaleScreen).subscribe((response: any) => {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
  }

  onNextPage() {
    if (this.currentPage < this.totalPages) {
      this.productService.getProductList(this.brand, this.price, this.name, this.cpu, this.currentPage + 2,
        this.pageSize, this.sort, this.check, this.isOnSaleScreen).subscribe((response: any) => {
        this.products = response.content;
        this.totalPages = response.totalPages;
        this.currentPage = response.number;
        this.pageSize = response.size;
      });
    }
  }


  findByIdProduct(productId: number) {
    this.productService.findById(productId).subscribe(data => {
      this.product = data;
      this.productEmitted.emit(this.product);
      this.shareData.setProductData(data);
    });

  }
}
