import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {ProductDto} from '../dto/ProductDto';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL_CREATE_PRODUCT = 'http://localhost:8080/product/create-product';
  private API_URL_EDIT_PRODUCT = 'http://localhost:8080/product//edit-product/';

  constructor(private httpClient: HttpClient) {
  }

  deleteProduct(id: any): Observable<any> {
    return this.httpClient.delete('http://localhost:8080/api/product/' + id);
  }

  getProductById(id: any): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/api/product/' + id);
  }

  getProductList(brandName: string, sellingPrice: string, productName: string,
                 currentPage: number, pageSize: number, sort: string, direction: boolean): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/product/list?brandName=' +
      brandName + '&sellingPrice=' + sellingPrice + '&productName=' + productName +
      '&page=' + currentPage + '&size=' + pageSize + '&sort=' + sort + '&direction=' + direction);
  }

  getResponseProduct(brandName: string, sellingPrice: string, productName: string,
                     currentPage: number, pageSize: number, sort: string, direction: boolean): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/product?brandName=' +
      brandName + '&sellingPrice=' + sellingPrice + '&productName=' + productName +
      '&page=' + currentPage + '&size=' + pageSize + '&sort=' + sort + '&direction=' + direction);
  }

  createProduct(productDto: ProductDto): Observable<ProductDto> {
    return this.httpClient.post<ProductDto>(this.API_URL_CREATE_PRODUCT, productDto);
  }

  editProduct(productDto: ProductDto, id: number): Observable<ProductDto> {
    return this.httpClient.put<ProductDto>(`${this.API_URL_EDIT_PRODUCT}/${id}`, productDto);

  }
}
