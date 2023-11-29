import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {tokenStorageService} from "../../security/service/token-storage.service";
import {EmployeeService} from "../service/infor-user.service";
import {AuthService} from "../../security/service/auth.service";
import Swal from "sweetalert2";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user/service/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordFormGroup: FormGroup;
  newPassword: string;
  confirmPassword: string;
  @Output() passwordChanged: EventEmitter<void> = new EventEmitter<void>();


  constructor(private tokenStorageService: tokenStorageService,
              private employeeService: EmployeeService,
              private authService: AuthService,
              private userService: UserService,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.changePasswordFormGroup = new FormGroup({
      presentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    }, {validators: this.passwordMatchValidator});
    this.changePasswordFormGroup.setValidators(this.passwordMatchValidator);
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword').value === g.get('confirmPassword').value
      ? null // Trả về null nếu mật khẩu và xác thực mật khẩu trùng khớp
      : {passwordMismatch: true}; // Trả về object chứa lỗi nếu không trùng khớp
  }

  changePassword() {
    if (this.changePasswordFormGroup.valid) {
      const changePasswordData = {
        username: this.authService.getUsernameFromToken(),
        presentPassword: this.changePasswordFormGroup.get('presentPassword').value,
        confirmPassword: this.changePasswordFormGroup.get('confirmPassword').value
      };

      this.http.post('http://localhost:8080/api/auth/checkCurrentPassword', changePasswordData).subscribe(
        (response) => {
          if (response) {
            // Xử lý phản hồi từ máy chủ nếu cần
            console.log('Mật khẩu đã được thay đổi.');
            // Hiển thị thông báo thành công với bảng và thời gian hiển thị
            Swal.fire({
              title: 'Thành công',
              text: 'Mật khẩu đã được thay đổi.',
              icon: 'success',
              timer: 3000,
              showConfirmButton: false,
            })
            this.handlePasswordChangeSuccess();
          } else {
            // Hiển thị thông báo lỗi nếu mật khẩu hiện tại không đúng
            Swal.fire({
              title: 'Lỗi',
              text: 'Mật khẩu hiện tại không đúng.',
              icon: 'error',
              timer: 3000,
              showConfirmButton: false,
            });
          }
        },
        (error) => {
          // Xử lý lỗi nếu có
          console.error('Lỗi khi thay đổi mật khẩu:', error);
          // Hiển thị thông báo lỗi với bảng và thời gian hiển thị
          Swal.fire({
            title: 'Lỗi',
            text: 'Có lỗi xảy ra khi thay đổi mật khẩu.',
            icon: 'error',
            timer: 3000,
            showConfirmButton: false,
          });
        }
      )
    }
  }
  handlePasswordChangeSuccess() {
    this.passwordChanged.emit();
  }
}

