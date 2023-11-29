import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private searchResultsSubject = new BehaviorSubject<any[]>([]);
  searchResults$: Observable<any[]> = this.searchResultsSubject.asObservable();

  updateSearchResults(results: any[]) {
    this.searchResultsSubject.next(results);
  }
}
