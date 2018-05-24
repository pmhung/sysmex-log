import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { AppService } from "../../../app.service";
import { User } from '../../../shared/models';

@Component({
  selector: 'popup-stack-trace',
  templateUrl: './popup-stack-trace.component.html',
  styleUrls: ['./popup-stack-trace.component.css'],
})
export class ShowLogPopupComponent implements OnInit {
    public arrayTest: Array<any>;    
    public stackTrace: string;
    @Output() closeModal = new EventEmitter<Array<any>>();

    constructor(){
      
    }
    ngOnInit(){
    }

    public initPopup(showContent){
      this.stackTrace = showContent;
    }

    public sendData(){
      var testArr = [{a: 1, b: 2}];
      this.closeModal.emit(testArr);
    }

    
}