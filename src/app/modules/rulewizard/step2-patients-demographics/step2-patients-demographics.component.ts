import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SearchModel } from "../models/wizard";
import { MRNPopupComponent } from '../../sample-explorer/popup/mrn-name-popup.component';
import { LocationPopupComponent } from '../../sample-explorer/popup/location-popup.component';
import * as _ from 'lodash';
@Component({
  selector: 'step2-patients-demographics',
  templateUrl: './step2-patients-demographics.component.html',
  styleUrls: ['./step2-patients-demographics.component.css']
})
export class Step2PatientsDemographicsComponent implements OnInit {
  @Input() searchModel: SearchModel;
  @ViewChild(MRNPopupComponent) popupMRN;
  @ViewChild(LocationPopupComponent) popupLocation;
  public checkModalType: boolean;
  constructor() {
    this.searchModel = new SearchModel();
  }

  ngOnInit() {
  }

  showMRNNameModal(type: boolean){
    var checkType = false;
    if(type){
      checkType = true;
    }
    this.checkModalType = checkType;
    this.popupMRN.initPopup(checkType);
  }
  showLocationModal(){
    this.popupLocation.initPopup();
  }
  getDataMrnName(arrayMrnName){
    if(arrayMrnName){      
      if(this.checkModalType){
        var tempArray = _.map(arrayMrnName, 'id');
        this.searchModel.mrn = tempArray.filter(function (val) {return val;}).join('; ');
      }else{
        var tempArray = _.map(arrayMrnName, 'name');
        this.searchModel.patientName = tempArray.filter(function (val) {return val;}).join("; ");
      }
      
    }
  }
  getDataLocation(arrayMrnName){
    if(arrayMrnName){
      var tempArray = _.map(arrayMrnName, 'location');
      this.searchModel.reqLocation = tempArray.filter(function (val) {return val;}).join("; ");
    }
  }
  
}
