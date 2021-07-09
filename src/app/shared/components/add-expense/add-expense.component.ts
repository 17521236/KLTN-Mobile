import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
import { tap } from 'rxjs/operators';
import { CreateExpense, Transaction } from 'src/app/models/transaction.model';
import { AuthService } from '../../service/auth.service';
import { BillService } from '../../service/bill.service';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {

  data;
  block;
  apt;
  constructor(private modalController: ModalController, private billService: BillService, private authService: AuthService) {
  }

  details$;

  ngOnInit() {
    this.details$ = this.billService.getOne(this.data._id);
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }

  moment = moment;
  async presentModal() {
    const modal = await this.modalController.create({
      component: PaymentMethodComponent,
      componentProps: {
        data: this.data,
        block: this.block,
        apt: this.apt,
        pmId: '1'
      }
    });
    return await modal.present();
  }
}