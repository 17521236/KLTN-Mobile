import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ROUTER_CONST } from 'src/app/core/router.config';
import { UserService } from 'src/app/services/user.service';
import { Store } from '../abstracts/store';
export class User {
  _id: string;
  blockId: string;
  aptId: string;
  name: string;
  identityCard: string;
  type: string;
  phoneNumber: string;
  dateOfBirth: string;
  note: string;
  // account
  email: string;
  password: string;
  avatarUrl: string;
  hasAccount: boolean
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends Store<User> {
  readonly isLoggedIn$ = this.state$.pipe(map((state: User) => !!state));
  constructor(private router: Router, private userService: UserService) {
    super(null);
  }
  readonly residentId$ = this.state$.pipe(map((state: User) => state?._id));
  readonly aptId$ = this.state$.pipe(map((state:User) => state?.aptId))
  // login
  login(data) {
    return this.userService.login(data);
  }


  logout() {
    localStorage.removeItem('user');
    this.router.navigate([ROUTER_CONST.NOT_AUTH]);
    this.state = null;
  }
  resetPassword(email) {
    return this.userService.resetPassword(email);
  }
}
