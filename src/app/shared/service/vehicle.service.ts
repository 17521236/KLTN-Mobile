
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { API } from 'src/app/core/api.config';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpService) { }

  getListVehicle(id){
    return this.http.sendToServer("GET", API.VEHICLE.GETLIST(id)).pipe( shareReplay());
  }

}
