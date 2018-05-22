import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavVerticalComponent } from "./modules/nav-vertical";
import { NavHorizontalComponent } from "./modules/nav-horizontal";


import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';
import { AuthGuard } from "./../common/auth.guard";

import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomToastOption } from './shared/models/CustomToastOption';

//import page
import { LoginModule } from "./modules/login/index";
import { SystemModule } from "./modules/system/system.module";
import { RulewizardModule } from "./modules/rulewizard/rulewizard.module";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { SampleExplorerModule } from "./modules/sample-explorer/sample-explorer.module";
import { ShowLogsModule } from "./modules/show-logs/show-logs.module";
@NgModule({
  declarations: [
    AppComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    LoginModule,
    BrowserModule,
    DashboardModule,
    SystemModule,
    RulewizardModule,
    SampleExplorerModule,
    ShowLogsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomToastOption },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
