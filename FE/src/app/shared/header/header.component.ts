import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../service/search.service';
import {SharedDataService} from '../../service/shared-data.service';
import {NavigationEnd, Router} from '@angular/router';
import {tokenStorageService} from '../../model/security/service/token-storage.service';
import {shareService} from '../../model/security/service/share.service';
import {AuthService} from '../../model/security/service/auth.service';
import {EmployeeService} from '../../model/user-detail/service/infor-user.service';
import {HomePageService} from '../../service/home-page.service';
import {ScrollUpService} from '../../service/scroll-up.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //phan quyen
  userRole: string;
  username: string;
  isLoggedIn = false;
  employeeInfo: any;
  searchQuery: string = '';
  showSearchInput: boolean;
  noDataMessage: string;


  constructor(private searchService: SearchService,
              private sharedDataService: SharedDataService,
              private router: Router,
              private authorize: tokenStorageService,
              private share: shareService,
              private authService: AuthService,
              private employeeService: EmployeeService,
              private scrollUpService: ScrollUpService) {
    this.share.getClickEvent().subscribe(() => {
      this.loadHeader();
    });


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is '/'
        if (event.url === '/home') {
          this.showSearchInput = true;
        } else {
          this.showSearchInput = false;
        }
      }
    });
  }


  loadHeader() {
    if (this.authorize.getToken()) {
      this.userRole = this.authorize.getRole()?.authority || 'USER';
      this.username = this.authService.getUsernameFromToken();
      this.employeeService.getEmployeeByUsername(this.username).subscribe(data => {
        this.employeeInfo = data;
      });
      this.isLoggedIn = true;
    } else {
      this.userRole = '';
      this.username = '';
      this.isLoggedIn = false;
    }
  }

  ngOnInit(): void {
    this.loadHeader();
  }

  logOut() {
    this.authorize.signOut();
    // @ts-ignore
    window.location.href = 'http://localhost:4200/';
  }

  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.searchService.search(this.searchQuery).subscribe(results => {
        this.sharedDataService.updateSearchResults(results);
        this.scrollUpService.scrollUp();
        // Check if there are no results and display a message
        if (results.length === 0) {
          this.noDataMessage = 'No data valid';
        } else {
          // Clear the message if there are results
          this.noDataMessage = '';
        }
      });
    }
  }

}
