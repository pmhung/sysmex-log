import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowLogsRoutingModule } from './show-logs-routing.module';
import { ShowLogsComponent } from './show-logs.component';
import { ShowLogsService } from './show-logs.service';

@NgModule({
  imports: [
    CommonModule,
    ShowLogsRoutingModule
  ],
  declarations: [ShowLogsComponent],
  providers: [ShowLogsService]
})
export class ShowLogsModule { }
