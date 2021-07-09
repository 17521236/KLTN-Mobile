import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { IonicModule } from '@ionic/angular';
import { NumberPipe } from './pipe/number.pipe';
import { VndPipe } from './pipe/vnd.pipe';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { MomoComponent } from './components/momo/momo.component';
import { BankingComponent } from './components/banking/banking.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlockComponent } from './components/block/block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { BlockDetailComponent } from './components/block-detail/block-detail.component';
import { ApartmentDetailComponent } from './components/apartment-detail/apartment-detail.component';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { BlockPipe } from './pipe/block.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { ManagerListComponent } from './components/manager-list/manager-list.component';
import { ManagerDetailComponent } from './components/manager-detail/manager-detail.component';
import { BillComponent } from './components/bill/bill.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';


@NgModule({
  declarations:
    [
      AddExpenseComponent,
      NumberPipe,
      VndPipe,
      PaymentMethodComponent,
      PaypalComponent,
      MomoComponent,
      BankingComponent,
      ProfileComponent,
      BlockComponent,
      InputComponent,
      PaginatorComponent,
      BlockDetailComponent,
      ApartmentDetailComponent,
      ApartmentComponent,
      BlockPipe,
      DropdownComponent,
      ServiceListComponent,
      ServiceDetailComponent,
      ManagerListComponent,
      ManagerDetailComponent,
      BillComponent,
      VehicleComponent,
      VehicleDetailComponent
    ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NzPaginationModule,
    NzEmptyModule,
    NzSelectModule,
  ],
  exports: [
    NumberPipe,
    VndPipe,
    InputComponent,
    PaginatorComponent,
    BlockPipe
  ],
  entryComponents: [
    ProfileComponent,
    BankingComponent,
    MomoComponent,
    AddExpenseComponent,
    PaymentMethodComponent,
    BlockDetailComponent,
    ApartmentDetailComponent,
    ApartmentComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    ManagerListComponent
  ]
})
export class SharedModule { }
