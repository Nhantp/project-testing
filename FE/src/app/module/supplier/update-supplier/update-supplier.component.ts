import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Supplier} from '../../../model/supplier';
import {SupplierService} from '../../../service/supplier-service/supplier.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import Swal from 'sweetalert2';

function phoneNumberValidator(control: AbstractControl) {
  const supplierPhone = control.value;
  if (!supplierPhone || supplierPhone.length !== 10) {
    return { invalidPhoneNumber: true };
  }
  return null;
}
@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {
  supplierForm: FormGroup;
  supplier: Supplier;
  supplierId: number;
  textLower: string = '';
  errorData: Map<string, string[]> = new Map();
  public phoneVN = /^0[0-9]*/;
  public name = /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$/;
  public address = /^[a-zA-Z0-9-().,/*_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ \n]+$/;
  public emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/;
  @ViewChild('successNotification') successNotification: ElementRef;
  constructor(private formBuilder: FormBuilder, private supplierService: SupplierService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.supplierId = +paramMap.get('supplierId');
      this.supplierService.findBySupplierId(this.supplierId).subscribe(supplier => {
        console.log(supplier);
        this.supplierForm = new FormGroup({
          supplierId: new FormControl(supplier.supplierId),
          supplierName: new FormControl(supplier.supplierName,
            [Validators.required,
              Validators.maxLength(40),
              Validators.pattern(this.name)
            ]),
          supplierPhone: new FormControl(supplier.supplierPhone, [
            Validators.required,
            Validators.pattern(this.phoneVN),
            phoneNumberValidator
          ]),
          supplierEmail: new FormControl(this.textLower = supplier.supplierEmail, [
            Validators.required,
            Validators.maxLength(40),
            Validators.pattern(this.emailRegex)

          ]),
          supplierAddress: new FormControl(supplier.supplierAddress, [
            Validators.required,
            Validators.maxLength(200),
            Validators.pattern(this.address)
          ])
        });
      });
    });
  }
  ngOnInit(): void {
  }
  getSupplier(id: number) {
    return this.supplierService.findBySupplierId(this.supplierId).subscribe(supplier => {
    });
  }
  onUpdate() {
    this.supplier = this.supplierForm.value;
    // if (this.supplierForm.valid) {
    this.supplierService.updateSupplier(this.supplierForm.value).subscribe(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Đã sửa thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this._router.navigateByUrl('/supplier');
        }, 1500);
      },
      error =>
        console.log(this.errorData = error.error)
    );
  }
  // }
  checkValid(field: string) {
    return (this.supplierForm.get(field).touched);
  }
  get supplierName() {
    return this.supplierForm.get('supplierName');
  }
  textToLower(event: any) {
    this.textLower = event.toLowerCase();
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
}
