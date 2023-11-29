import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from './auth.guard';
import {RoleGuard} from './role.guard';
import {HomePageComponent} from './shared/home-page/home-page.component';
import {NoAuthGuard} from './NoAuthGuard';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./model/security/security.module').then(module => module.SecurityModule),
    canActivate: [NoAuthGuard]
  },
  {
    path: 'signUp',
    loadChildren: () => import('./model/user/user-routing.module').then(module => module.UserRoutingModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN']}
  },
  {
    path: 'profile',
    loadChildren: () => import('./model/user-detail/infor-user-routing.module').then(module => module.InforUserRoutingModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'changePassword',
    loadChildren: () => import('./model/user-detail/infor-user-routing.module').then(module => module.InforUserRoutingModule),
    canActivate: [AuthGuard]
  },
   {
     path: 'product',
     loadChildren: () => import('./module/product/product.module').then(module => module.ProductModule),
     canActivate: [AuthGuard, RoleGuard],
     data: { roles: ['ADMIN', 'BUSINESS', 'STORAGE','SALE']}

  },
  {
    path: 'managerPurchaseHistory',
    loadChildren: () => import('./module/manager-purchase-history/manager-purchase-history.module')
      .then(module => module.ManagerPurchaseHistoryModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN', 'BUSINESS', 'SALE']}
  },
  {
    path: 'report',
    loadChildren: () => import('./module/report/report.module').then(module => module.ReportModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN', 'BUSINESS']}
  },

  {
    path: 'input-invoice',
    loadChildren: () => import('./module/input-invoice-detail/input-invoice-detail.module').then(m => m.InputInvoiceDetailModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN', 'STORAGE']}
  },
  {
    path: 'supplier',
    loadChildren: () => import('./module/supplier/supplier.module').then(module => module.SupplierModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN', 'STORAGE', 'BUSINESS']}
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate: [AuthGuard, NoAuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./module/output-invoice/output-invoice.module').then(module => module.OutputInvoiceModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['ADMIN', 'SALE']}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule {
}
