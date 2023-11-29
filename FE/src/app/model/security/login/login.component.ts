import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {shareService} from "../service/share.service";
import {tokenStorageService} from "../service/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";

declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  username = '';
  // tslint:disable-next-line:ban-types
  roles: String[];
  returnUrl: string;
  showPassword = false;

  constructor(private authService: AuthService,
              private shareService: shareService,
              private tokenStorageService: tokenStorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '';
    this.formLogin = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('^[^!@#$%^&*()_+=-]+$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(32)
      ]),
      remember_me: new FormControl('')
    })
    if (this.tokenStorageService.getToken()) {
      const user = this.tokenStorageService.getUser();
      this.authService.isLoggedIn = true;
      this.roles = this.tokenStorageService.getRole();
      this.username = this.tokenStorageService.getUser();
      this.formLogin.get('username').setValue(user.username);
      console.log(this.formLogin.get('username').setValue(user));
    }

  }


  onLogin() {
    if (this.formLogin.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi...',
        text: 'Vui lòng điền đầy đủ thông tin đăng nhập.',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    let timerInterval;
    Swal.fire({
      title: 'Loading....',
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer()?.querySelector('b');
        if (b) {
          b.textContent = String(Swal.getTimerLeft());
          timerInterval = setInterval(() => {
            b.textContent = String(Swal.getTimerLeft());
          }, 500);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
      // Thêm một thời gian chờ tối đa (timeout) 15 giây
      timer: 10000, // Thời gian chờ tối đa trong mili giây (15 giây)
    });

    this.authService.login(this.formLogin.value).subscribe(
      (data) => {
        if (data && data.error) {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: 'Thông tin đăng nhập không hợp lệ.',
            showConfirmButton: false,
            timer: 1500,
          });
          this.authService.isLoggedIn = false;
        } else {
          if (this.formLogin.value.remember_me) {
            sessionStorage.clear();
            this.tokenStorageService.saveTokenLocal(data.token);
            this.tokenStorageService.saveUserLocal(data.username);
            this.tokenStorageService.saveNameLocal(data.name);
            this.tokenStorageService.saveRoleLocal(data.roles[0]);
          } else {
            localStorage.clear();
            this.tokenStorageService.saveTokenSession(data.token);
            this.tokenStorageService.saveUserSession(data.username);
            this.tokenStorageService.saveNameLocal(data.name);
            this.tokenStorageService.saveRoleSession(data.roles[0]);
          }
          this.authService.isLoggedIn = true;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đăng nhập thành công',
            showConfirmButton: false,
            timer: 1500,
          });
          const roles = this.tokenStorageService.getRole();
          console.log(roles);
          this.authService.setToken(data.token);
          this.formLogin.reset();
          this.router.navigateByUrl('/home');
          this.shareService.sendClickEvent();
        }
      },
      (err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: 'Thông tin đăng nhập không hợp lệ.',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: 'Không thể kết nối đến máy chủ hoặc có lỗi khác.',
            showConfirmButton: false,
            timer: 1500,
          });
        }
        this.authService.isLoggedIn = false;
      }
    );
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


}
