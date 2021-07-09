import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TableHelper } from '../../model/table-helper';
import { EmployeeService } from '../../service/employee.service';
import { ManagerDetailComponent } from '../manager-detail/manager-detail.component';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.scss'],
})
export class ManagerListComponent implements OnInit {

  tableHelper: TableHelper = new TableHelper();
  result$: Observable<any[]> = this.tableHelper.query$.pipe(
    switchMap((table: TableHelper) => {
      return this.employeeService.getList().pipe(
        tap((x: any[]) => this.total = x.length),
        map((res: any[]) => res.filter((i, index) => (index >= table.paginator.getStart()) && (index < table.paginator.getStart() + table.paginator.pageSize)))
      );
    })
  )
  total = 0;
  constructor(
    private modalController: ModalController,
    // private blockService: BlockService,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.tableHelper.filterForm = this.fb.group({
      name: ''
    })
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }
  refreshFilter() {

  }
  async viewDetail(i) {
    const modal = await this.modalController.create({
      component: ManagerDetailComponent,
      componentProps: {
        data: i
      }
    });
    return await modal.present();
  }
}
