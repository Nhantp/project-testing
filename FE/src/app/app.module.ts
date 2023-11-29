
import {SupplierModule} from './module/supplier/supplier.module';
import {InputInvoiceDetailModule} from './module/input-invoice-detail/input-invoice-detail.module';
import {CommonModule, CurrencyPipe, DatePipe} from '@angular/common';
import {DateFormatPipe} from './date-format.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ChangePasswordComponent} from './model/user-detail/change-password/change-password.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ManagerPurchaseHistoryRoutingModule} from './module/manager-purchase-history/manager-purchase-history-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {PhoneDetailsComponent} from './shared/phone-details/phone-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule, RouterOutlet} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {SecurityModule} from './model/security/security.module';



import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import {CustomerModule} from './module/customer/customer.module';
import {HomePageComponent} from './shared/home-page/home-page.component';
import {BodyComponent} from './shared/body/body.component';
import {ImageScrollComponent} from './shared/image-scroll/image-scroll.component';
import {OutputInvoiceModule} from './module/output-invoice/output-invoice.module';
import {AddUserComponent} from './model/user/add-user/add-user.component';
import {ToastrModule} from "ngx-toastr";
import { PasswordStrengthDirective } from './password-strength.directive';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DateFormatPipe,
    ChangePasswordComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BodyComponent,
    ImageScrollComponent,
    PasswordStrengthDirective
  ],
  entryComponents: [PhoneDetailsComponent],

  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    SecurityModule,
    ManagerPurchaseHistoryRoutingModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CustomerModule,
    SupplierModule,
    InputInvoiceDetailModule,
    NgbModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule,
    SocialLoginModule,
    // NgxPaginationModule,
    OutputInvoiceModule,
    ToastrModule.forRoot()
  ],
  providers: [DatePipe],
    exports: [
        PasswordStrengthDirective
    ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
