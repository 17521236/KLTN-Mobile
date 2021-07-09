import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TableHelper } from '../../model/table-helper';
import { ApartmentService } from '../../service/apartment.service';
import { BlockService } from '../../service/block.service';
import { ApartmentDetailComponent } from '../apartment-detail/apartment-detail.component';
import { DropdownItem } from '../dropdown/model/dropdown.model';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss'],
})
export class ApartmentComponent implements OnInit {
  tableHelper: TableHelper = new TableHelper();
  result$: Observable<any> = this.tableHelper.query$.pipe(
    switchMap((x: any) => {
      return this.aptService.getApartment(
        x.paginator.getStart(),
        x.paginator.pageSize,
        x.filterForm.value['name'],
        x.filterForm.value['blockId']
      )
    })
  )
  blocks$ = this.blockService.getBlocks('', 0, 999).pipe(map((x: any) => x.items));
  blocksDD$ = this.blocks$.pipe(
    map((x: any) => x.map(item => new DropdownItem(item._id, item.name))),
    map((x: any) => [new DropdownItem('', 'All'), ...x])
  )
  constructor(
    private modalController: ModalController,
    private aptService: ApartmentService,
    private blockService: BlockService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.tableHelper.filterForm = this.fb.group({
      name: '',
      blockId: ""
    })
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }
  refreshFilter() {

  }
  async viewDetail(i, blocks) {
    const modal = await this.modalController.create({
      component: ApartmentDetailComponent,
      componentProps: {
        data: i,
        blocks: blocks
      }
    });
    return await modal.present();
  }
}
