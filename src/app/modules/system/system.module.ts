import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from "./system.component";
import { ShareModule } from "./../../shared/share.module";
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    SystemRoutingModule,
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
