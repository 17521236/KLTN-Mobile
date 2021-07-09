import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApartmentService } from '../../service/apartment.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.scss'],
})
export class ApartmentDetailComponent implements OnInit {

  data;
  detail$;
  blocks;
  constructor(
    private modalController: ModalController,
    private aptService: ApartmentService
  ) { }

  ngOnInit() {
    this.detail$ = this.aptService.getOne(this.data._id);
  }
  cancel() {
    this.modalController.dismiss().then().catch();
  }
}
