import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../service/infor-user.service";
import {AuthService} from "../../security/service/auth.service";
import {DatePipe} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChangePasswordComponent} from "../change-password/change-password.component";


@Component({
  selector: 'app-list-user',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  username: string;
  employeeInfo: any;
  hiddenPassword: string;

  constructor(private authService: AuthService,
              private employeeService: EmployeeService,
              private datePipe: DatePipe,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.username = this.authService.getUsernameFromToken();
    // Gọi service để lấy thông tin Employee dựa trên username
    this.employeeService.getEmployeeByUsername(this.username).subscribe(data => {
      this.employeeInfo = data;
      this.hiddenPassword = '*****';
      // Kiểm tra nếu có birthdayEmployee và định dạng lại nó
      if (this.employeeInfo && this.employeeInfo.birthdayEmployee) {
        this.employeeInfo.birthdayEmployee = this.datePipe.transform(this.employeeInfo.birthdayEmployee, 'dd/MM/yyyy');
      }
    });
  }

  openChangePasswordForm() {
    const modalRef = this.modalService.open(ChangePasswordComponent);
    modalRef.componentInstance.username = this.employeeInfo.user.username;
    modalRef.componentInstance.passwordChanged.subscribe(() => {
      // Xử lý khi mật khẩu đã được thay đổi thành công
      modalRef.close('passwordChanged');
    });
  }
}


