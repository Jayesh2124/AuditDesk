import { Routes } from '@angular/router';
import { DashboardAdminComponent } from './component/dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardUserComponent } from './component/dashboard/dashboard-user/dashboard-user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./component/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
  },
  {
    path: 'dashboard-user',
    component: DashboardUserComponent,
  },
];
