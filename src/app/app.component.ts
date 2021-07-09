import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService, User } from './shared/service/auth.service';
import { Router } from '@angular/router';
import { ROUTER_CONST } from './core/router.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
    const user: User = new User(JSON.parse(localStorage.getItem('user')));
    if (user?._id) {
      this.authService.state = user;
      if(window.location.pathname === ROUTER_CONST.NOT_AUTH){
        this.router.navigate([ROUTER_CONST.DASHBOARD])
      }
      return;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
