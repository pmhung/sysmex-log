import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../common/auth.guard';
import { RulewizardComponent } from './rulewizard.component';
import { SecureComponent } from '../../layout/secure';

const routes: Routes = [
  {
    path: 'dashboard/system', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: [
      { path: 'rule-wizard', component: RulewizardComponent, canActivate: [AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class RulewizardRoutingModule { }


