import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Supplier} from '../../../model/supplier';
import {SupplierService} from '../../../service/supplier-service/supplier.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
function phoneNumberValidator(control: AbstractControl) {
  const supplierPhone = control.value;
  if (!supplierPhone || supplierPhone.length !== 10) {
    return { invalidPhoneNumber: true };
  }
  return null;
}
@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
  supplierForm: FormGroup;
  supplier: Supplier;
  errorData: Map<String , string[]> = new Map();
  textLower = '';
  public phoneVN = /^0[0-9]*/;
  public name = /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$/;
  public address = /^[a-zA-Z0-9-().,/*_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$/;
  public emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
  @ViewChild('successNotification') successNotification: ElementRef;
  constructor(private supplierService: SupplierService, private router: Router) {
    this.supplierForm = new FormGroup({
      supplierId: new FormControl(),
      supplierName: new FormControl('',
        [Validators.required,
          Validators.maxLength(40),
          Validators.pattern(this.name)
        ]),
      supplierPhone: new FormControl('', [
        Validators.required,
        Validators.pattern(this.phoneVN),
        phoneNumberValidator
      ]),
      supplierEmail: new FormControl('', [
        Validators.required,
        Validators.maxLength(40),
        Validators.pattern(this.emailRegex)
      ]),
      supplierAddress: new FormControl('', [
        Validators.required,
        Validators.pattern(this.address),
        Validators.maxLength(200),
      ])
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    this.supplier = this.supplierForm.value;
    if (this.supplierForm.valid) {
      this.supplierService.addNewSupplier(this.supplierForm.value).subscribe(
        next => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đã xóa thành công',
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            this.router.navigateByUrl('/supplier');
          }, 1500);
        },
        (error) => {
          {console.log(this.errorData = error.error); }
        }
      );
    }
  }
  checkValid(field: string) {
    return (this.supplierForm.get(field).touched);
  }
  get supplierName() {
    return this.supplierForm.get('supplierName');
  }
  hideError(hideError: string) {
    this.errorData[hideError] = null;
  }
  get supplierPhone() {
    return this.supplierForm.get('supplierPhone');
  }
  get supplierEmail() {
    return this.supplierForm.get('supplierEmail');
  }
  get supplierAddress() {
    return this.supplierForm.get('supplierAddress');
  }
  textToLower(event: any) {
    this.textLower = event.toLowerCase();
  }
  }
