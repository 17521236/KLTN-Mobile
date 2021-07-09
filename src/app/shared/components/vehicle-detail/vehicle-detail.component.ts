import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../service/auth.service';
import { VehicleService } from '../../service/vehicle.service';

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
  constructor(private modalController: ModalController,
    private vehicleService: VehicleService) { }

  ngOnInit() {
    this.data$= of(this.data)
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }

}
