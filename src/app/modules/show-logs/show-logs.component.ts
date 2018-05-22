import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-logs',
  templateUrl: './show-logs.component.html',
  styleUrls: ['./show-logs.component.css']
})
export class ShowLogsComponent implements OnInit {
  public arraySampleId: Array<any>;

  constructor() { 
    this.arraySampleId = new Array<any>();
  }

  ngOnInit() {
    this.arraySampleId = [
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
      {id: '1', description: 'des'},
    ];
  }

}