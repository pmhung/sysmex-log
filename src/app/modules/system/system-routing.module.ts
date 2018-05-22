import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from "./system.component";
import { AuthGuard } from '../../../common/auth.guard';
import { SecureComponent } from '../../layout/secure';
const routes: Routes = [
  {
    path: 'dashboard/system',
    component: SecureComponent,
    canActivate: [AuthGuard],
    data: { title: 'Secure Views' },
    children:
      [
        { path: '', component: SystemComponent, canActivate: [AuthGuard] },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
