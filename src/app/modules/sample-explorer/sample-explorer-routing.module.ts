import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleExplorerComponent  } from "./sample-explorer.component";
import { SecureComponent } from '../../layout/secure';
import { AuthGuard } from '../../../common/auth.guard';

const routes: Routes = [
  {
    path: 'sample-explorer', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: [
      { path: '', component: SampleExplorerComponent, canActivate: [AuthGuard] }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleExplorerRoutingModule { }
