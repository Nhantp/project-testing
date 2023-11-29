import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScrollUpService {
  private scrollSubject = new Subject<void>();
  scrollUp() {
    this.scrollSubject.next();
  }

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }
}
