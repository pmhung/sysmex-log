import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { AppService } from "../../../app.service";
import { User } from '../../../shared/models';
import { SampleExplorerService } from '../sample-explorer.service';
@Component({
  selector: 'workplace-popup',
  templateUrl: './workplace-popup.component.html',
  styleUrls: ['./common-style.component.css'],
})
export class WorkplacePopupComponent implements OnInit {
    public arrayWorkPlace: Array<any>;    
    @Output() closeModal = new EventEmitter<Array<any>>();

    constructor(private sampleExplorerService: SampleExplorerService){
      
    }
    ngOnInit(){
    }

    public initPopup(type: boolean){
        if(!this.arrayWorkPlace){
            this.sampleExplorerService.getWorkPlace().subscribe(results => {
                this.arrayWorkPlace = results["content"];
              },errors=>{
      
              });
        }
    }

    public sendData(){
        let tempArray = new Array<any>();
        this.arrayWorkPlace.forEach(element => {
        if(element["selected"]){
            //console.log(element);
            tempArray.push(element);
        }
        });
        this.closeModal.emit(tempArray);
    }
    
}