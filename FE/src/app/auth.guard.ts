import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {tokenStorageService} from "./model/security/service/token-storage.service";
import { Observable } from 'rxjs';
import Swal from "sweetalert2";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenStorageService: tokenStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this.tokenStorageService.getToken();
    if (token !== null) {
      return true;
    }
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'Bạn phải đăng nhập để sử dụng chức năng này!',
      showConfirmButton: false,
      timer: 1500
    });
    return this.router.createUrlTree(['/login'], {queryParams: {returnUrl: state.url}});
  }
}
