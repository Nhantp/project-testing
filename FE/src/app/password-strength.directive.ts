import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPasswordStrength]',
})
export class PasswordStrengthDirective {
  @Input() appPasswordStrength: string;

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    const password = this.appPasswordStrength;
    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
      this.el.nativeElement.setCustomValidity(''); // Password is strong
    } else {
      this.el.nativeElement.setCustomValidity('Mật khẩu cần đủ mạnh.');
    }
  }
}

