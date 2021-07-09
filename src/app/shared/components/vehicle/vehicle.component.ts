import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { TableHelper } from '../../model/table-helper';
import { AuthService } from '../../service/auth.service';
import { VehicleService } from '../../service/vehicle.service';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {


  result$: Observable<any> = this.authService.aptId$.pipe(
    switchMap(id => {
      return this.vehicleService.getListVehicle(id)
    })
 )

  constructor(private modalController: ModalController,
    private vehicleService: VehicleService,
    private authService: AuthService) { }

  ngOnInit() {

  }


  cancel() {
    this.modalController.dismiss().then().catch();
  }

  async viewDetail(i) {
    const modal = await this.modalController.create({
      component: VehicleDetailComponent,
      componentProps: {
        data: i
      }
    });
    return await modal.present();
  }

}
