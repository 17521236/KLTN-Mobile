import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { API } from 'src/app/core/api.config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpService) { }
 

  getBillByAptId(id){
    return this.http.sendToServer("GET",API.BILL.GET_LIST(id)).pipe(shareReplay());
  }

  getOne(id) {
    return this.http.sendToServer("GET", API.BILL.GET_ONE(id), null, null).pipe(shareReplay());
  }
  update(data, id) {
    return this.http.sendToServer('PATCH', API.BILL.UPDATE(id), data, null).pipe(shareReplay());
  }
  // deleteOne(id) {
  //   return this.http.sendToServer('DELETE', API.BILL.DELETE(id)).pipe(shareReplay());
  // }
 
}
