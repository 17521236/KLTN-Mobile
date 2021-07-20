import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RedirectComponent } from './redirect/redirect.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'redirect', component: RedirectComponent
  },
  {
    path: 'dashboard',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
    , canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
