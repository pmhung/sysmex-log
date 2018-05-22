import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { AppService } from "../../../app.service";
import { User } from '../../../shared/models';

@Component({
  selector: 'popup-stack-trace',
  templateUrl: './popup-stack-trace.component.html',
  styleUrls: ['./popup-stack-trace.component.css'],
})
export class LocationPopupComponent implements OnInit {
    public arrayLocation: Array<any>;    
    @Output() closeModal = new EventEmitter<Array<any>>();

    constructor(){
      
    }
    ngOnInit(){
    }

    public initPopup(type: boolean){

    }

    public sendData(){

    }
    
}