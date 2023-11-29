import {Component, OnInit} from '@angular/core';
import {PhoneDataService} from '../../service/phone-data.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  // products: any[];
  phoneDetails: any;

  constructor(private phoneDataService: PhoneDataService) {
  }

  ngOnInit() {
    this.phoneDetails = this.phoneDataService.getPhoneDetails();
  }

  formatCurrency(value) {

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
