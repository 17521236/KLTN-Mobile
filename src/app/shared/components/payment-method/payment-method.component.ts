import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { render } from 'creditcardpayments/creditCardPayments';
import { ToastrService } from 'ngx-toastr';
import { BankingComponent } from '../banking/banking.component';
import { MomoComponent } from '../momo/momo.component';
import { PaypalComponent } from '../paypal/paypal.component';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {

  data;
  block;
  apt;
  constructor(private modalController: ModalController, private toast: ToastrService) {

  }
  

  ngOnInit() { }
  cancel() {
    this.modalController.dismiss().then().catch();
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: PaypalComponent,
      componentProps: {data: this.data}
    });
    return await modal.present();
  }
  async presentModal1() {
    const modal = await this.modalController.create({
      component: MomoComponent,
      componentProps: {
        data: this.data,
        block: this.block,
        apt: this.apt
      }
    });
    let x = await modal.present();
    console.log(x)
    return x;
  }
  async presentModal2() {
    const modal = await this.modalController.create({
      component: BankingComponent,
      componentProps: {
        data: this.data,
        block: this.block,
        apt: this.apt
      }
    });
    return await modal.present();
  }
}
