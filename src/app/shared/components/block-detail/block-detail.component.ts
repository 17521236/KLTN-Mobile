import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BlockService } from '../../service/block.service';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss'],
})
export class BlockDetailComponent implements OnInit {
  data;
  detail$;
 
  constructor(
    private modalController: ModalController,
    private blockService: BlockService
  ) { }

  ngOnInit() {
    this.detail$ = this.blockService.getBlockById(this.data._id);
  }
  cancel() {
    this.modalController.dismiss().then().catch();
  }
}
