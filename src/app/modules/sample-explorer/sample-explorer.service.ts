import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SampleExplorerService{
    private apiMrnAndName = 'http://52.72.89.41:32771/api/patient/';//'http://34.235.122.169:32768/api/testcode/';
    private apiWorkPlace = 'http://52.72.89.41:32771/api/workplace/';
    private apiLocation = 'http://52.72.89.41:32771/api/location/';
    /*
      private apiMrnAndName = 'http://52.72.89.41:32771/api/patient/';//'http://34.235.122.169:32768/api/testcode/';
  private apiWorkPlace = 'http://52.72.89.41:32771/api/workplace/';
  private apiLocation = 'http://52.72.89.41:32771/api/location/';
    */
    constructor(private http: HttpClient) { }

    getMrnAndName(): Observable<any[]> {
        let url = this.apiMrnAndName;
        return this.http.get<any>(url);
    }
    
    getWorkPlace(): Observable<any[]> {
        let url = this.apiWorkPlace;
        return this.http.get<any>(url);
    }
    
    getLocation(): Observable<any[]> {
        let url = this.apiLocation;
        return this.http.get<any>(url);
    }
}
