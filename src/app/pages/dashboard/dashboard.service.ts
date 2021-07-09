import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { API } from 'src/app/core/api.config';
import { HttpService } from 'src/app/shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpService) { }

  getDashboard(id) {
    if (!id) return of()
    return this.http.sendToServer("GET", API.DASHBOARD.GET_ALL(id), {}, null, null)
  }
}
