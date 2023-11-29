import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {catchError, switchMap} from 'rxjs/operators';
import {throwError} from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formSignUp: FormGroup;
  fieldErrors: { [key: string]: string } = {};


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.formSignUp = this.formBuilder.group({
      nameEmployee: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), this.noNumbersValidator()]],
      birthdayEmployee: ['', [Validators.required, this.validateBirthday]],
      addressEmployee: ['', [Validators.required, Validators.maxLength(45)]],
      numberPhoneEmployee: ['', [Validators.required, Validators.maxLength(14), this.invalidNumberPhone]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      role: ['', [Validators.required]],
      email: ['', [Validators.required, this.customEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(35)]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validators: [this.matchPasswords, this.passwordMatch]
    });
  }

  noNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /[0-9!@#$%^&*]/.test(control.value);

      return forbidden ? {noNumbers: true} : null;
    };
  }

  validateBirthday(control: any) {
    const birthday = new Date(control.value);
    const currentDate = new Date();
    return birthday <= currentDate ? null : {invalidBirthday: true};
  }

  matchPasswords(control: any) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  passwordMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({passwordMismatch: true});
    } else {
      confirmPassword.setErrors(null);
    }

    return null;
  }

  customEmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const pattern = /^\w+([.-]?\w+)*@gmail\.com$/;
    if (!pattern.test(email)) {
      return {invalidEmail: true};
    }
    return null;
  }

  invalidNumberPhone(control: AbstractControl): { [key: string]: boolean } | null {
    const numberPhone = control.value;
    const pattern = /^(0[1-9]\d{8})$/;
    if (!pattern.test(numberPhone)) {
      return {invalidNumberPhone: true};
    }
    return null;
  }

  isFieldInvalid(fieldName: string) {
    const control = this.formSignUp.get(fieldName);
    if (control.invalid && control.touched) {
      this.fieldErrors[fieldName] = this.getFieldErrorMessage(fieldName);
    }
    return control.invalid && control.touched;
  }


  getFieldErrorMessage(fieldName: string): string {
    if (this.formSignUp.get(fieldName).hasError('required')) {
      if (fieldName === 'nameEmployee') {
        return 'Họ và tên không được để trống.';
      } else if (fieldName === 'password') {
        return 'Mật khẩu không được để trống.';
      } else if (fieldName === 'addressEmployee') {
        return 'Ðịa chỉ không được để trống.';
      } else if (fieldName === 'role') {
        return 'Vui lòng chọn quyền hạn.';
      } else if (fieldName === 'email') {
        return 'Email không được để trống.';
      } else if (fieldName === 'username') {
        return 'Tên tài khoản không được để trống.';
      } else if (fieldName === 'birthdayEmployee') {
        return 'Ngày sinh không hợp lệ';
      } else if (fieldName === 'numberPhoneEmployee') {
        return 'số điện thoại không được để trống';
      }
    }

    if (fieldName === 'confirmPassword' && this.formSignUp.hasError('passwordMismatch')) {
      return 'Mật khẩu và mật khẩu xác thực không khớp!!';
    }


    if (this.formSignUp.get(fieldName).hasError('maxlength')) {
      if (fieldName === 'nameEmployee') {
        return 'Tên không được quá 20 kí tự.';
      } else if (fieldName === 'addressEmployee') {
        return 'Ðịa chỉ không được quá 45 kí tự.';
      } else if (fieldName === 'numberPhoneEmployee') {
        return 'Số điện thoại không được quá 14 kí tự.';
      } else if (fieldName === 'username') {
        return 'Tên tài khỏan không được quá 15 kí tự.';
      } else if (fieldName === 'password') {
        return 'Mật khẩu không được quá 35 kí tự.';
      }
    }

    if (this.formSignUp.get(fieldName).hasError('minlength')) {
      if (fieldName === 'nameEmployee') {
        return 'Họ và tên trên 5 kí tự.';
      } else if (fieldName === 'username') {
        return 'Tên tài khoản trên 5 kí tự.';
      }
    }
    if (fieldName === 'numberPhoneEmployee') {
      if (this.formSignUp.get(fieldName).hasError('invalidNumberPhone')) {
        return 'Không đúng định dạng số Việt Nam';
      }
    }

    if (fieldName === 'nameEmployee') {
      if (this.formSignUp.get(fieldName).hasError('noNumbers')) {
        return 'Họ và tên không cho phép chứa kí tự đặc biệt!!';
      }
    }

    if (fieldName === 'birthdayEmployee') {
      if (this.formSignUp.get(fieldName).hasError('invalidBirthday')) {
        return 'Ngày không không hợp lệ.';
      }
    }

    if (fieldName === 'email') {
      if (this.formSignUp.get(fieldName).hasError('invalidEmail')) {
        return 'Email phải đúng định dạng!!!';
      }
    }
    return '';
  }


  onSubmit() {
    if (this.formSignUp.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi...',
        text: 'Vui lòng điền đầy đủ thông tin đăng nhập.',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    const username = this.formSignUp.get('username').value;
    const email = this.formSignUp.get('email').value;

    this.userService.checkExistingUsername(username)
      .pipe(
        switchMap((usernameExists) => {
          if (usernameExists) {
            return throwError('Tài khoản đã tồn tại!');
          } else {
            return this.userService.checkExistingEmail(email);
          }
        }),
        switchMap((emailExists) => {
          if (emailExists) {
            return throwError('Email dã tồn tại!');
          } else {
            const employee = this.createEmployee();
            return this.userService.addEmployee(employee);
          }
        }),
        catchError((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: error,
          });
          console.log('Error:', error);
          return throwError(error);
        })
      )
      .subscribe(
        (data) => {
          localStorage.setItem('tempAccount', JSON.stringify(data));
          this.formSignUp.reset();
          this.router.navigateByUrl('/home');

          Swal.fire({
            icon: 'success',
            title: 'Ðang ký thành công!',
            text: 'Tài khoản của bạn đã tạo thành công.',
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Lỗi...',
            text: error,
          });
        }
      );
  }


  createEmployee() {
    return {
      nameEmployee: this.formSignUp.get('nameEmployee').value,
      birthdayEmployee: this.formSignUp.get('birthdayEmployee').value,
      addressEmployee: this.formSignUp.get('addressEmployee').value,
      numberPhoneEmployee: this.formSignUp.get('numberPhoneEmployee').value,
      positionEmployee: this.formSignUp.get('role').value,
      user: {
        username: this.formSignUp.get('username').value,
        password: this.formSignUp.get('confirmPassword').value,
        email: this.formSignUp.get('email').value,
        avatar: null
      },
      role: [this.formSignUp.get('role').value]
    };
  }
}
