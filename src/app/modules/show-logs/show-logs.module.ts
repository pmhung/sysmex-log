import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ShowLogsRoutingModule } from './show-logs-routing.module';
import { ShowLogsComponent } from './show-logs.component';
import { ShowLogsService } from './show-logs.service';
import { ShowLogPopupComponent } from './pop-up/popup-stack-trace.component';
import { PaginationComponent } from '../pagination/pagination';

import { DateFormatHTML } from './pipe/date-pipe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShowLogsRoutingModule
  ],
  exports:[DateFormatHTML],
  declarations: [ShowLogsComponent, ShowLogPopupComponent, PaginationComponent, DateFormatHTML],
  providers: [ShowLogsService, DateFormatHTML]
})
export class ShowLogsModule { }
