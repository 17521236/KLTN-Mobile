import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { DashboardService } from 'src/app/pages/dashboard/dashboard.service';
import { TableHelper } from '../../model/table-helper';
import { AuthService } from '../../service/auth.service';
import { BillService } from '../../service/bill.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit, OnDestroy {
  sub$ = new Subject();
  tableHelper: TableHelper = new TableHelper();
  pending = false;
  dashboard$ = this.authService.residentId$.pipe(
    switchMap(id => this.dashboardService.getDashboard(id)),
    takeUntil(this.sub$)
  );

  result$: Observable<any> = this.authService.aptId$.pipe(
    switchMap((id: any) => {
      return this.billService.getBillByAptId(id)
    })
  );

  ngOnDestroy(): void {
    this.sub$.next();
  }

  constructor(
    private modalController: ModalController,
    private billService: BillService,
    private authService: AuthService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }

  viewDetail(id) {
    if (!this.pending) {
      this.pending = true;
      this.billService.getOneMobile(id).subscribe((data: any) => {
        this.openDetail(data);
        this.pending = false;
      }, _ => this.pending = false);
    }
  }

  async openDetail(data) {
    const modal = await this.modalController.create({
      component: AddExpenseComponent,
      componentProps: {
        data: data.bill,
        block: data.block,
        apt: data.apt
      }
    });
    return await modal.present();
  }

  getColor(i) {
    return i.status === 'APPROVE' ? 'rgb(0, 143, 251)' : (i.status === 'NOT_APPROVE' ? 'rgb(254, 176, 25)' : 'rgb(0, 227, 150)');
  }
}
