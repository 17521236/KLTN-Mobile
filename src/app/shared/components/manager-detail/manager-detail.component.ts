import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.scss'],
})
export class ManagerDetailComponent implements OnInit {

  data;
  detail$;

  constructor(private modalController: ModalController,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.detail$ = this.employeeService.getEmployeeById(this.data._id)
   
  }

  cancel() {
    this.modalController.dismiss().then().catch();
  }
}
