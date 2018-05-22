import { Injectable } from '@angular/core';
import { User } from "./shared/models/user";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders ,HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs/observable/of';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AppService {
  public user: any;

  constructor(private http: HttpClient) {
    this.user = new User();
  }


}
