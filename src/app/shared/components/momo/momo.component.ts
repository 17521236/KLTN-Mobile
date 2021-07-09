import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ROUTER_CONST } from 'src/app/core/router.config';
import { ApartmentService } from '../../service/apartment.service';
import { BillService } from '../../service/bill.service';

@Component({
  selector: 'app-momo',
  templateUrl: './momo.component.html',
  styleUrls: ['./momo.component.scss'],
})
export class MomoComponent implements OnInit {

  data;
  block;
  apt;
  constructor(
    private modalController: ModalController,
    private aptService: ApartmentService,
    private billService: BillService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit() { }

  cancel() {
    this.modalController.dismiss().then().catch();
  }
  moment = moment;
  updateBill() {
    this.billService.update({
      status: 'PENDING',
      pmId: '2'
    }, this.data._id).subscribe(_ => {
      this.toast.success('Vui lòng chờ ban quản lý duyệt');
      setTimeout(() => window.location.reload(), 1000)
    })
  }
}
