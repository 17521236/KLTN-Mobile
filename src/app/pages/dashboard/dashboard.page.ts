import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { AddExpenseComponent } from 'src/app/shared/components/add-expense/add-expense.component';
import { ApartmentComponent } from 'src/app/shared/components/apartment/apartment.component';
import { BillComponent } from 'src/app/shared/components/bill/bill.component';
import { BlockComponent } from 'src/app/shared/components/block/block.component';
import { ManagerListComponent } from 'src/app/shared/components/manager-list/manager-list.component';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';
import { ServiceListComponent } from 'src/app/shared/components/service-list/service-list.component';
import { VehicleComponent } from 'src/app/shared/components/vehicle/vehicle.component';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {
  sub$ = new Subject();
  ngOnDestroy(): void {
    this.sub$.next();
  }
  
  dashboard$ = this.authService.residentId$.pipe(switchMap(id => this.dashboardService.getDashboard(id)), takeUntil(this.sub$))

  constructor(public modalController: ModalController, private dashboardService: DashboardService, private authService: AuthService) {
  }

  moment = moment;
  ngOnInit() {
  }

  async presentModal(dashboard) {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      componentProps: {
        data: dashboard.bill,
        block: dashboard.block,
        apt: dashboard.apt
      }
    });
    return await modal.present();
  }

  async navDetail() {
    const modal = await this.modalController.create({
      component: ProfileComponent,
      componentProps: {}
    });
    return await modal.present();
  }
  logout() {
    this.authService.logout();
  }

  async showBlockList() {
    const modal = await this.modalController.create({
      component: BlockComponent,
      componentProps: {}
    });
    return await modal.present();
  }
  async showAptList() {
    const modal = await this.modalController.create({
      component: ApartmentComponent,
      componentProps: {}
    });
    return await modal.present();
  }
  async showServiceList() {
    const modal = await this.modalController.create({
      component: ServiceListComponent,
      componentProps: {}
    });
    return await modal.present();
  }
  async showEmployeeList() {
    const modal = await this.modalController.create({
      component: ManagerListComponent,
      componentProps: {}
    });
    return await modal.present();
  }

  async showBIll() {
    const modal = await this.modalController.create({
      component: BillComponent,
      componentProps: {}
    });
    return await modal.present();
  }


  async showVehicleList() {
    const modal = await this.modalController.create({
      component: VehicleComponent,
      componentProps: {}
    });
    return await modal.present();
  }


}
