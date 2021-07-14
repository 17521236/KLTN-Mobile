import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent implements OnInit {
  data;
  data$;
  result$: Observable<any>;
  residentId$;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.data$ = of(this.data);
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }

}
