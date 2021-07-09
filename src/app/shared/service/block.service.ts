import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { API } from 'src/app/core/api.config';
import { HttpService } from 'src/app/shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor(private http: HttpService) { }
  getBlocks(name = '', start = 0, limit = 5) {
    return this.http.sendToServer("GET", API.BLOCK.GET_ALL, null, null, { name, start, limit }).pipe(shareReplay());
  }
  getBlockById(id) {
    return this.http.sendToServer("GET", API.BLOCK.GET_ONE(id)).pipe(shareReplay());
  }
}
