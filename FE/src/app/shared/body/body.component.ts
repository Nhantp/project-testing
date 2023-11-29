import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {HomePageService} from '../../service/home-page.service';
import {MatDialog} from '@angular/material/dialog';
import {PhoneDetailsComponent} from '../phone-details/phone-details.component';
import {PhoneDataService} from '../../service/phone-data.service';
import {SharedDataService} from '../../service/shared-data.service';
import {ScrollUpService} from '../../service/scroll-up.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  products: any[];
  currentPage: number = 1;
  itemsPerPage: number = 8;
  @ViewChild('content') content: ElementRef;

  constructor(private dialog: MatDialog, private phoneDataService: PhoneDataService, private homePageService: HomePageService,
              private sharedDataService: SharedDataService,
              private scrollUpService: ScrollUpService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.homePageService.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.sharedDataService.searchResults$.subscribe(results => {
      this.products = results;
    });
    this.scrollUpService.getScrollObservable().subscribe(() => {
      this.scrollToTop();
    });
  }

  openDetailsModal(phone: any) {
    this.phoneDataService.setPhoneDetails(phone);

    this.dialog.open(PhoneDetailsComponent);
  }

  formatCurrency(value) {

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getPaginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.scrollUpService.scrollUp();
  }

  goToNextPage() {
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
    this.scrollUpService.scrollUp();
  }

  canGoToPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  canGoToNextPage(): boolean {
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    return this.currentPage < totalPages;
  }

  getTotalPages() {
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    return totalPages;
  }

  scrollToTop() {
    this.renderer.setProperty(document.body, 'scrollTop', 0);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
}

