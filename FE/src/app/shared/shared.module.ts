import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {BodyComponent} from "./body/body.component";
import {ImageScrollComponent} from "./image-scroll/image-scroll.component";
import {PhoneDetailsComponent} from "./phone-details/phone-details.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [

    PhoneDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule {
}
