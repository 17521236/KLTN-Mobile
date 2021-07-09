import { Injectable } from '@angular/core';
import { API } from '../core/api.config';
import { HttpService } from '../shared/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }

  login(user) {
    return this.http.sendToServer("POST", API.RESIDENT.LOGIN, user);
  }
  resetPassword(email) {
    return this.http.sendToServer("POST", API.RESIDENT.RESET_PASS_BY_EMAIL, {email});
  }
}
