import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { render } from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';
import { BillService } from '../../service/bill.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss'],
})
export class PaypalComponent implements OnInit, AfterViewInit {
  data;
  usdTrans = 23000;
  constructor(private modalController: ModalController, private toast: ToastrService, private billService: BillService) { }
  ngAfterViewInit(): void {
    let amount = (Number(this.data.lastBalance) / this.usdTrans).toFixed(2);
    render({
      id: "#paypalbtn",
      currency: "USD",
      value: amount,
      onApprove: (details) => {
        this.billService.update({
          status: 'APPROVE',
          paidAmount: Number(this.data.lastBalance).toFixed(0),
          lastBalance: 0,
          pmId: '1'
        }, this.data._id).subscribe(_ => {
          this.toast.success('Thanh toán thành công.');
          setTimeout(() => window.location.reload(), 1000)
        })
      }
    })
  }

  ngOnInit() { }

  cancel() {
    this.modalController.dismiss().then().catch();
  }

  paypalClick() {
    document.getElementById('paypalbtn').click();
  }
}
