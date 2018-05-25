import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from "@angular/router";

//import { DateFormatHTML } from '../modules/show-logs/pipe/date-pipe.component';

import { AppChildrenComponent } from "./components/app-children/app-children.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule 
  ],
  declarations: [AppChildrenComponent],
  exports:[AppChildrenComponent ],
  providers: [],
})
export class ShareModule { }
