import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { API } from 'src/app/core/api.config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpService) { }
  getList(name = '', start = 0, limit = 5) {
    return this.http.sendToServer("GET", API.EMPLOYEE.GET_ALL, null, null, { name, start, limit }).pipe(shareReplay());
  }
  getEmployeeById(id){
    return this.http.sendToServer("GET",API.EMPLOYEE.GET_ONE(id)).pipe(shareReplay());
  }
}
