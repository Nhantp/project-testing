import {Injectable, Injector} from '@angular/core';
import {Subject} from 'rxjs';
import {HomePageService} from './home-page.service';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private searchSubject = new Subject<string>();
  private homePageService: HomePageService; // Lazily-loaded service

  searchObservable = this.searchSubject.asObservable();

  constructor(private injector: Injector) {}

  private getHomePageService(): HomePageService {
    if (!this.homePageService) {
      // Lazily load the service using the Injector
      this.homePageService = this.injector.get(HomePageService);
    }
    return this.homePageService;
  }

  sendSearchTerm(searchTerm: string) {
    // Use getHomePageService to avoid circular dependency during instantiation
    const homePageService = this.getHomePageService();
    // homePageService.searchProducts(searchTerm);
    this.searchSubject.next();
  }
}

