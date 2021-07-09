import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PaginatorEvent } from '../../model/paginator';
import { TableHelper } from '../../model/table-helper';
import { BlockService } from '../../service/block.service';
import { BlockDetailComponent } from '../block-detail/block-detail.component';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {

  tableHelper: TableHelper = new TableHelper();
  result$: Observable<any> = this.tableHelper.query$.pipe(
    switchMap((x: any) => {
      return this.blockService.getBlocks(
        x.filterForm.value['name'],
        x.paginator.getStart(),
        x.paginator.pageSize
      )
    })
  )
  constructor(
    private modalController: ModalController,
    private blockService: BlockService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.tableHelper.filterForm = this.fb.group({
      name: ''
    })
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }
  refreshFilter() {

  }
  async viewDetail(i) {
    const modal = await this.modalController.create({
      component: BlockDetailComponent,
      componentProps: {
        data: i
      }
    });
    return await modal.present();
  }
}
