import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { tokenStorageService } from "./model/security/service/token-storage.service";
import { Observable } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private tokenStorageService: tokenStorageService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const requiredRoles: string[] = next.data.roles;
    const userRoles = this.tokenStorageService.getRole();

    console.log('requiredRoles:', requiredRoles);
    console.log('userRoles:', userRoles);

    if (userRoles && userRoles.authority) {
      const userAuthority = userRoles.authority;
      if (requiredRoles.includes(userAuthority)) {
        return true;
      }
    }

    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Bạn không được phép sử dụng chức năng này!',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(['/home']);
    return false;
  }
}

