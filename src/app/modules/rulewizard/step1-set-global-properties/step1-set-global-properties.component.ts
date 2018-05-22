import { Component, OnInit, Input } from '@angular/core';


// import { NgModel } from "@angular/forms";
import { SearchModel } from '../models/wizard';
@Component({
  selector: 'step1-set-global-properties',
  templateUrl: './step1-set-global-properties.component.html',
  styleUrls: ['./step1-set-global-properties.component.css']
})
export class Step1SetGlobalPropertiesComponent implements OnInit {
  @Input()searchModel:SearchModel;
 
  constructor() {
    this.searchModel=new SearchModel();
  }

  ngOnInit() {
  }

}
