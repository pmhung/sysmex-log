import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppService } from "../../../app.service";
import { User } from '../../../shared/models';
import { SampleExplorerService } from '../sample-explorer.service';
@Component({
  selector: 'mrn-name-popup',
  templateUrl: './mrn-name-popup.component.html',
  styleUrls: ['./common-style.component.css'],
})
export class MRNPopupComponent implements OnInit {
    public arrayMRN: Array<any>;
    public arrayName: Array<any>;
    public typeMRN: boolean;
    @Output() closeModal = new EventEmitter<Array<any>>();
    constructor(private sampleExplorerService: SampleExplorerService){
      
    }
    ngOnInit(){
    }

    public initPopup(type: boolean){
      this.typeMRN = type;
      if(type){
        if(!this.arrayMRN){
          this.sampleExplorerService.getMrnAndName().subscribe(results => {
            this.arrayMRN = results["content"];
          },errors=>{});
        }
      }else{
        if(!this.arrayName){
          this.sampleExplorerService.getMrnAndName().subscribe(results => {          
            this.arrayName = results["content"];
          },errors=>{});
        }        
      }
    }

    public sendData(){
      let tempArray = new Array<any>();
      if(this.typeMRN){
        this.arrayMRN.forEach(element => {
          if(element["selected"]){
            //console.log(element);
            tempArray.push(element);
          }
        });
        this.closeModal.emit(tempArray);
      }else{
        this.arrayName.forEach(element => {
          if(element["selected"]){
            //console.log(element);
            tempArray.push(element);
          }
        });
        this.closeModal.emit(tempArray);
      }
    }

}