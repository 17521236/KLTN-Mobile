import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ROUTER_CONST } from 'src/app/core/router.config';
import { BillService } from '../../service/bill.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  data;
  block;
  apt;
  constructor(private modalController: ModalController, private billService: BillService, private toast: ToastrService, private router: Router) { }

  ngOnInit() {}
  cancel() {
    this.modalController.dismiss().then().catch();
  }
  moment=moment;

  updateBill() {
    this.billService.update({
      status: 'PENDING',
      pmId: '3'
    }, this.data._id).subscribe(_ => {
      this.toast.success('Vui lòng chờ ban quản lý duyệt');
      setTimeout(() => window.location.reload(), 1000)
      // this.router.navigate([ROUTER_CONST.REDIRECT]).then(_=>{
      //   this.router.navigate([ROUTER_CONST.DASHBOARD])
      // })
    })
  }
}
