import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowLogsComponent  } from "./show-logs.component";
import { SecureComponent } from '../../layout/secure';
import { AuthGuard } from '../../../common/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard/show-logs', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: [
      { path: '', component: ShowLogsComponent, canActivate: [AuthGuard] }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowLogsRoutingModule { }