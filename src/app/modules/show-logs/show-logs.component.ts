import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowLogsService } from '../show-logs/show-logs.service';
import { ShowLogPopupComponent } from '../show-logs/pop-up/popup-stack-trace.component';
import { PaginationComponent } from '../pagination/pagination';
@Component({
  selector: 'show-logs',
  templateUrl: './show-logs.component.html',
  styleUrls: ['./show-logs.component.css']
})
export class ShowLogsComponent implements OnInit {
  public arraySampleId: any;
  public numberRecords: number = 0;
  public arrayDetail: Array<any>;
  public position: number;
  public sampleId: string;
  public keyWordSearch: string;
  public pager: any;

  //public tempData = {"content":["206","AAABBBCCC","ASTM042308","Mimo1","mimo2","mimo3","mimo4","NA100","NA101","Na11","Na12","NGAN0521001","NGAN052103","NGAN052105","NGAN052106","NGAN052107","NGAN052108","NGAN052109","NGAN052110","NGAN052112","NGAN052202","NGAN052203","NGAN052204","NGAN052205","NGAN052209","NGAN052210","NGAN052211","NGAN052212","NGAN052213","NGAN052214","NGAN052302","SON6","SONCT90-1","SONCT90-2","SONCT90-3","TEST0220004","TEST0220005","Trang007","Trang008","Trang009","Trang011","Trang013"],"count":42};
  @ViewChild(ShowLogPopupComponent) popupShowLog;
  constructor(private showLogsService: ShowLogsService) { 
    this.arraySampleId = {};    
    this.arrayDetail = new Array<any>();
    this.keyWordSearch = "";
    this.pager = this.showLogsService.getPager(0);
  }
  searchSampleId(){
    this.keyWordSearch = this.sampleId;
    this.getSampleId(this.keyWordSearch);
  }

  getSampleId(keyWord, currentPage = 1){
    this.pager.currentPage = currentPage;
      this.showLogsService.getAllSampleId(keyWord, currentPage).subscribe(results=>{
        this.arraySampleId = results;
        if(results){
          this.rowClick(results["content"][0]);
          this.position = 0;
        }
        this.pager = this.showLogsService.getPager(this.arraySampleId.count, this.pager.currentPage);

      },errors=>{
  
      });    
  }


  ngOnInit() {
    //this.arraySampleId = this.tempData;    
    this.showLogsService.getAllSampleId().subscribe(results=>{
      this.arraySampleId = results;
      if(results){
        this.rowClick(results["content"][0]);
        this.position = 0;        
      }
      this.pager = this.showLogsService.getPager(this.arraySampleId.count);

    },errors=>{

    });
  }
  //this.pager = this.data.getPager(this.resultsAllData.totalItems);

  public rowClick(item){
    this.position = this.arraySampleId.content.indexOf(item);
    this.showLogsService.getDetailBySampleId(item).subscribe(results=>{
      //this.arrayDetail = [];
      if(this.arrayDetail.length > 0){
        this.arrayDetail = [];
      }
      this.arrayDetail = results;
      //this.pager = this.showLogsService.getPager(this.arraySampleId.count);
    },error=>{

    });
  }

  getDataStackTrace(event){

  }

  showStackTrace(item){
    this.popupShowLog.initPopup(item.content); 
  }
  changePage(event) {
    //{pageIndex: 2, pageSize: 10}
    this.getSampleId(this.keyWordSearch, event.pageIndex);
    
  }
}