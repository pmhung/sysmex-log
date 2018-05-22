import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '.';
import { AuthGuard } from '../../../common/auth.guard';
import { SecureComponent } from '../../layout/secure';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SecureComponent,
    canActivate: [AuthGuard],
    data: { title: 'Secure Views' },
    children:
      [
        { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
