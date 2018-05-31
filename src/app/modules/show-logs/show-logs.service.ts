import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ShowLogsService{
    private apiGetSampleId = '';
    private apiShowDetail = '';
    //http://10.17.75.122:8181/cxf/logviewer/sampleId
    //http://10.17.75.122:8181/cxf/logviewer/findBySampleId/
    constructor(private http: HttpClient) {
      var origin = window.location.origin;
      this.apiGetSampleId = origin + '/cxf/logviewer/sampleId';
      this.apiShowDetail = origin + '/cxf/logviewer/findBySampleId/';
      // this.apiGetSampleId = 'http://10.17.75.122:8181/cxf/logviewer/sampleId';
      // this.apiShowDetail = 'http://10.17.75.122:8181/cxf/logviewer/findBySampleId/';
    }

    getAllSampleId(sampleId = '', page = 1): Observable<any[]> {
        let url = this.apiGetSampleId;
        /*
        http://10.16.189.63:8181/cxf/logviewer/sampleId?page=0&size=100
        cxf/logviewer/sampleId/search?sampleId=ngan&page=0&size=200
         */
        if(sampleId){
            url += `/search?sampleId=${sampleId}&page=${page-1}&size=15`;
        }else{
            url +=`?page=${page-1}&size=15`;
        }
        return this.http.get<any>(url);
    }

    getDetailBySampleId(sampleId) : Observable<any[]>{
        let url = this.apiShowDetail + sampleId;

        return this.http.get<any>(url);
    }
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 15) {
        // calculate total pages
    
        let totalPages = Math.ceil(totalItems / pageSize);
    
        let startPage: number, endPage: number;
        if (totalPages <= 5) {
          // less than 10 total pages so show all
          startPage = 1;
          endPage = totalPages;
        } else {
          // more than 10 total pages so calculate start and end pages
          if (currentPage < 3) {
            startPage = 1;
            endPage = 5;
          } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 4;
            endPage = totalPages;
          } else {
            startPage = currentPage - 1;
            endPage = currentPage + 3;
          }
        }
    
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
        // create an array of pages to ng-repeat in the pager control
        let pages = [];
        for (var i = startPage; i < endPage + 1; i++) {
          pages.push(i);
        }
        //  let pages= _.range(startPage, endPage + 1);
    
    
    
        // return object with all pager properties required by the view
        return {
          totalItems: totalItems,
          currentPage: currentPage,
          pageSize: pageSize,
          totalPages: totalPages,
          startPage: startPage,
          endPage: endPage,
          startIndex: startIndex,
          endIndex: endIndex,
          pages: pages
        };
      }

}
