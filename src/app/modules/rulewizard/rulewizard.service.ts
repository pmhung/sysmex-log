
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Rulewizard } from '../../shared/models/rulewizard';

// import { Hero } from './hero';
// import { MessageService } from './message.service';
@Injectable()
export class RulewizardService {

  private apiUrl = 'http://34.204.180.133:32773/';
  //'http://34.235.122.169:32768/';
  //http://34.204.180.133:32771/api/rules
  private apiMrnAndName = '';
  private apiWorkPlace = '';
  private apiLocation = '';

  constructor(private http: HttpClient) { }

  search(data): Observable<any[]> {
    let url = this.apiUrl + `api/rules/spec?search=`;//'ruleName:${data.ruleName},discipline:${data.discipline},activeMode:${data.activeMode},triggerOn:${data.triggerOn}&page=0&size=5`;
    //step1
    if (data.ruleName != null) {
      url += `ruleName:${data.ruleName},`;
    }
    if (data.discipline != null) {
      url += `discipline:${data.discipline},`;
    }
    if (data.activeMode != null) {
      url += `activeMode:${data.activeMode},`;
    }
    if (data.triggerOn != null) {
      url += `triggerOn:${data.triggerOn},`;
    }
    //step2:
    if (data.patienType != null) {
      url += `patienType:${data.patienType},`;
    }
    if (data.gender != null) {
      url += `gender:${data.gender},`;
    }
    if (data.mrn != null) {
      url += `mrn:${data.mrn},`;
    }
    if (data.patientName != null) {
      url += `patientName:${data.patientName},`;
    }
    if (data.reqLocation != null) {
      url += `reqLocation:${data.reqLocation}`;
    }
    //step3:
    if (url.length > 0) {
      url = url.substring(0, url.length - 1);
    }
    url += '&page=0&size=10';
    return this.http.get<any>(url);
  }

  getMrnAndName(): Observable<any[]> {
    let url = this.apiMrnAndName;
    return this.http.get<any>(url);
  }

  getWorkPlace(): Observable<any[]> {
    let url = this.apiMrnAndName;
    return this.http.get<any>(url);
  }

  getLocation(): Observable<any[]> {
    let url = this.apiMrnAndName;
    return this.http.get<any>(url);
  }
}
