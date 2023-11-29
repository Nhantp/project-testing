import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {tokenStorageService} from './model/security/service/token-storage.service';
import {Observable} from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router,
              // tslint:disable-next-line:no-shadowed-variable
              private tokenStorageService: tokenStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.tokenStorageService.getToken();
    if (token !== null) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Bạn đã đăng nhập rồi!!',
        showConfirmButton: false,
        timer: 1500
      });
      return this.router.createUrlTree(['/home']);
      return false;
    }
    return true;
  }
}
