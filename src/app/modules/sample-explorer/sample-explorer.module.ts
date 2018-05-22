import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleExplorerRoutingModule } from './sample-explorer-routing.module';
import { SampleExplorerComponent } from './sample-explorer.component';
import { SampleExplorerService } from './sample-explorer.service';

@NgModule({
  imports: [
    CommonModule,
    SampleExplorerRoutingModule
  ],
  declarations: [SampleExplorerComponent],
  providers: [SampleExplorerService]
})
export class SampleExplorerModule { }
