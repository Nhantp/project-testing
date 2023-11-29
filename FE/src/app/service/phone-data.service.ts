import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhoneDataService {
  private phoneDetails: Product;

  setPhoneDetails(details: Product) {
    this.phoneDetails = details;
  }

  getPhoneDetails() {
    return this.phoneDetails;
  }
}
