import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MRNPopupComponent } from '../sample-explorer/popup/mrn-name-popup.component';
import { LocationPopupComponent } from '../sample-explorer/popup/location-popup.component';
import { WorkplacePopupComponent } from '../sample-explorer/popup/workplace-popup.component';
import { SampleExplorerService } from '../sample-explorer/sample-explorer.service';
import {
  RulewizardComponent,
  Step1SetGlobalPropertiesComponent,
  Step2PatientsDemographicsComponent,
  Step3TestLevelComponent,
  Step4SearchResultComponent,
  DetailCartComponent,
  RulewizardService,
  RulewizardRoutingModule,
  
} from "./";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RulewizardRoutingModule

  ],
  declarations: [
    
    RulewizardComponent,
    Step1SetGlobalPropertiesComponent,
    Step2PatientsDemographicsComponent,
    Step3TestLevelComponent,
    Step4SearchResultComponent,
    // AppChildrenComponent,
    DetailCartComponent,
    MRNPopupComponent,
    LocationPopupComponent,
    WorkplacePopupComponent
    
  ],
  providers:[RulewizardService, SampleExplorerService],
  bootstrap: [RulewizardComponent],

})
export class RulewizardModule { }
