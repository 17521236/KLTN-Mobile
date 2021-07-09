import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {

  data;
  detail$;
  constructor(
    private modalController: ModalController,
    private serviceService: ServiceService
  ) { }

  ngOnInit() {
    // this.detail$ = this.serviceService.getOne(this.data._id);
    this.detail$ = of(this.data);
  }
  cancel() {
    this.modalController.dismiss().then().catch();
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
