import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TableHelper } from '../../model/table-helper';
import { ServiceService } from '../../service/service.service';
import { ServiceDetailComponent } from '../service-detail/service-detail.component';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent implements OnInit {

  tableHelper: TableHelper = new TableHelper();
  result$: Observable<any> = this.serviceService.getList();
  constructor(
    private modalController: ModalController,
    private serviceService: ServiceService
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }


  async viewDetail(i) {
    const modal = await this.modalController.create({
      component: ServiceDetailComponent,
      componentProps: {
        data: i
      }
    });
    return await modal.present();
  }

  getIcon(i) {
    if (i.name == 'Điện') {
      return 'bxs-bolt yellow';
    }
    if (i.name == 'Nước') {
      return 'bx-water blue';
      // <i class='bx bxs-droplet'></i>
    }
    if (i.name == 'Internet') {
      return 'bx-wifi';
    }
    if (i.name == 'Phí dịch vụ') {
      return 'bx-purchase-tag-alt';
    }
    if (i.name == 'Gửi xe (xe đạp)') {
      return 'd-none';
    }
    if (i.name == 'Gửi xe (xe máy)') {
      return 'd-none';
    }
    if (i.name == 'Gửi xe (ô tô)') {
      return 'bxs-car';
    }
    return "bx-dots-horizontal-rounded";
  }
}
