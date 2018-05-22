import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from "@angular/router";


import { AppChildrenComponent } from "./components/app-children/app-children.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule 
  ],
  declarations: [AppChildrenComponent],
  exports:[AppChildrenComponent]
})
export class ShareModule { }
