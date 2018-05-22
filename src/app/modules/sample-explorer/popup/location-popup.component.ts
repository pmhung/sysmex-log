import { Component, OnInit, ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { AppService } from "../../../app.service";
import { User } from '../../../shared/models';
import { SampleExplorerService } from '../sample-explorer.service';
@Component({
  selector: 'location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./common-style.component.css'],
})
export class LocationPopupComponent implements OnInit {
    public arrayLocation: Array<any>;    
    @Output() closeModal = new EventEmitter<Array<any>>();

    constructor(private sampleExplorerService: SampleExplorerService){
      
    }
    ngOnInit(){
    }

    public initPopup(type: boolean){
        if(!this.arrayLocation){
            this.sampleExplorerService.getLocation().subscribe(results => {
                this.arrayLocation = results["content"];
              },errors=>{
      
              });
        }
    }

    public sendData(){
        let tempArray = new Array<any>();
        this.arrayLocation.forEach(element => {
        if(element["selected"]){
            //console.log(element);
            tempArray.push(element);
        }
        });
        this.closeModal.emit(tempArray);
    }
    
}