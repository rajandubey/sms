import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SocietyComponent } from './admin/society/society.component';
import { FlatComponent } from './admin/flat/flat.component';
import { UsersComponent } from './admin/users/users.component';
import { BuildingComponent } from './admin/building/building.component';
import { FyComponent } from './admin/fy/fy.component';
import { ModifyBuildingComponent } from './admin/building/modify-building/modify-building.component';
import { ModifySocietyComponent } from './admin/society/modify-society/modify-society.component';
import { AddBuildingComponent } from './admin/building/add-building/add-building.component';
import { AddFyComponent } from './admin/fy/add-fy/add-fy.component';
import { AddFlatComponent } from './admin/flat/add-flat/add-flat.component';
import { ModifyFlatComponent } from './admin/flat/modify-flat/modify-flat.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { ModifyUserComponent } from './admin/users/modify-user/modify-user.component';
import { VendorComponent } from './admin/vendor/vendor.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AddVendorComponent } from './admin/vendor/add-vendor/add-vendor.component';
import { ModifyVendorComponent } from './admin/vendor/modify-vendor/modify-vendor.component';
import { AddCustomerComponent } from './admin/customer/add-customer/add-customer.component';
import { ModifyCustomerComponent } from './admin/customer/modify-customer/modify-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingItemComponent } from './admin/billing-item/billing-item.component';
import { AddBillItemComponent } from './admin/billing-item/add-billItem/add-billItem.component';
import { ModifyBillItemComponent } from './admin/billing-item/modify-billItem/modify-billItem.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'society',
        component: SocietyComponent,
        children: [
          {
            path: ':id',
            component: ModifySocietyComponent
          }
        ]
      },
      {
        path: 'building',
        component: BuildingComponent,
        children: [
          {
            path: 'add-building',
            component: AddBuildingComponent
          },
          {
            path: ':id',
            component: ModifyBuildingComponent
          }
        ]
      },
      {
        path: 'flat',
        component: FlatComponent,
        children: [
          {
            path: 'add-flat',
            component: AddFlatComponent
          },
          {
            path: ':id',
            component: ModifyFlatComponent
          }
        ]
      },
      {
        path: 'fy',
        component: FyComponent,
        children: [
          {
            path: 'add-fy',
            component: AddFyComponent
          }
        ]
      },
      {
        path: 'user',
        component: UsersComponent,
        children: [
          {
            path: 'add-user',
            component: AddUserComponent
          },
          {
            path: ':id',
            component: ModifyUserComponent
          }
        ]
      },
      {
        path: 'vendor',
        component: VendorComponent,
        children: [
          {
            path: 'add-vendor',
            component: AddVendorComponent
          },
          {
            path: ':id',
            component: ModifyVendorComponent
          }
        ]
      },
      {
        path: 'customer',
        component: CustomerComponent,
        children: [
          {
            path: 'add-customer',
            component: AddCustomerComponent
          },
          {
            path: ':id',
            component: ModifyCustomerComponent
          }
        ]
      },
      {
        path: 'billing',
        component: BillingItemComponent,
        children:[
          {
            path:'add-bill',
            component:AddBillItemComponent
          },
          {
            path:':id',
            component:ModifyBillItemComponent
          }
        ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allComponent = [
  AdminComponent,
  LoginComponent,
  SocietyComponent,
  FlatComponent,
  UsersComponent,
  BuildingComponent,
  FyComponent,
  ModifyBuildingComponent,
  ModifySocietyComponent,
  AddBuildingComponent,
  AddFyComponent,
  AddFlatComponent,
  ModifyFlatComponent,
  AddUserComponent,
  ModifyUserComponent,
  VendorComponent,
  CustomerComponent,
  AddVendorComponent,
  ModifyVendorComponent,
  AddCustomerComponent,
  ModifyCustomerComponent,
  DashboardComponent,
  BillingItemComponent,
  AddBillItemComponent,
  ModifyBillItemComponent
]