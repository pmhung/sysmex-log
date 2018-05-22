import { Component, OnInit, Input } from '@angular/core';
import { SearchModel } from '../models/wizard';

@Component({
  selector: 'step3-test-level',
  templateUrl: './step3-test-level.component.html',
  styleUrls: ['./step3-test-level.component.css']
})
export class Step3TestLevelComponent implements OnInit {
  @Input() searchModel: SearchModel;
  constructor() {
    this.searchModel = new SearchModel();
  }
  public testcodes: Array<any> = [
    { id: 1, name: 'HGB' },
    { id: 2, name: 'HCT' },
    { id: 3, name: 'PLT' },
  ];


  ngOnInit() {
  }
  public changeSelectionTestCode() {
    this.searchModel.testCode=[];
    for (let i = 0; i < this.testcodes.length; i++) {
      let item = this.testcodes[i];

      if (item.selected == true) {
        this.searchModel.testCode.push(item);
      }
    }
  }

}
