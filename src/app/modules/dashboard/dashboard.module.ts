import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './';
import { ShareModule } from "./../../shared/share.module";

import { AppService } from "../../app.service";
// import { AppChildrenComponent } from '../../shared/components/app-children/app-children.component';
 
@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers:[AppService],
  // bootstrap:[DashboardComponent]
})
export class DashboardModule { }
