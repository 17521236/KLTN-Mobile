import { Component, OnInit } from '@angular/core';
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
export class BillComponent implements OnInit {
  tableHelper: TableHelper = new TableHelper();

  sub$ = new Subject();
  ngOnDestroy(): void {
    this.sub$.next();
  }
  
  dashboard$ = this.authService.residentId$.pipe(switchMap(id => this.dashboardService.getDashboard(id)), takeUntil(this.sub$))


  result$: Observable<any> = this.authService.aptId$.pipe(
    switchMap((id: any) => {
      return this.billService.getBillByAptId(id)
    })
  )
  constructor( private modalController: ModalController,
                private fb:FormBuilder,
                private billService:BillService,
                private authService:AuthService ,
                private dashboardService:DashboardService) { }

  ngOnInit() {
  }
  
  cancel(){
    this.modalController.dismiss().then().catch()
  }

  async ViewDetail(dashboard) {
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

}
