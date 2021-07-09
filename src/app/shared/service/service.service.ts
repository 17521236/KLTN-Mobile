import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { API } from 'src/app/core/api.config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpService) { }
  getList(){
    return this.http.sendToServer("GET", API.SERVICE.GET_ALL, null, null).pipe(shareReplay());
  }
  getOne(id){
    return this.http.sendToServer("GET", API.SERVICE.GET_ONE(id), null, null).pipe(shareReplay());
  }
}
