import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ShowLogsRoutingModule } from './show-logs-routing.module';
import { ShowLogsComponent } from './show-logs.component';
import { ShowLogsService } from './show-logs.service';
import { ShowLogPopupComponent } from './pop-up/popup-stack-trace.component';
import { PaginationComponent } from '../pagination/pagination';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShowLogsRoutingModule
  ],
  declarations: [ShowLogsComponent, ShowLogPopupComponent, PaginationComponent],
  providers: [ShowLogsService]
})
export class ShowLogsModule { }
