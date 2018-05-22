import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from "../../app.service";
import { RulewizardService } from "../rulewizard/rulewizard.service";
import { Rulewizard } from "../../shared/models/rulewizard";
import { SearchModel } from "./models/wizard";
import { User } from '../../shared/models';
import { Router } from '@angular/router';
import { Step4SearchResultComponent } from './step4-search-result/step4-search-result.component';

@Component({
  selector: 'rulewizard',
  templateUrl: './rulewizard.component.html',
  styleUrls: ['./rulewizard.component.css'],
  providers: [AppService]
})
export class RulewizardComponent implements OnInit {
  public searchModel: SearchModel;
  public resultsAllData: any;
  public currentStep = 1;
  public results: Array<any>;
  public selections: Array<string>;
  public detailSelection: any;
  public cart: Array<any>;
  constructor(private router: Router, private appService: AppService, private rulewizardService: RulewizardService) {
    this.results = [];
    this.resultsAllData = null;
    this.detailSelection = null;
    this.selections = [];
    this.searchModel = new SearchModel();
    this.cart = [];


  }

  ngOnInit() {
    this.appService.user.isAuthor = true;


  }

  public selectStep(step) {

    let tabCurent: HTMLElement = document.querySelector(".nav-wizard .active") as HTMLElement;
    if (tabCurent != null) {
      tabCurent.classList.toggle("active");
    }

    let selector = "#tab" + step;
    let tabSelect: HTMLElement = document.querySelector(selector) as HTMLElement;

    if (tabCurent != null) {
      tabSelect.classList.toggle("active");
    }

    let contentCurent: HTMLElement = document.querySelector(".contentTab:not(.collapse)") as HTMLElement;
    if (contentCurent != null) {
      contentCurent.classList.toggle("collapse");
    }

    selector = '#contentTab' + step;
    let currentSelect: HTMLElement = document.querySelector(selector) as HTMLElement;
    if (currentSelect != null) {
      currentSelect.classList.toggle("collapse");
    }
    this.currentStep = step;
    // console.log(step);
    // if (step == 4) {
    //   this.search();

    // }
  }

  public search() {
    let searchResultTable: HTMLElement = document.querySelector(".step4 .table-result") as HTMLElement;
    if (searchResultTable != null) {
      if (searchResultTable.classList.contains("col-md-7")) {
        searchResultTable.classList.remove("col-md-7");
        searchResultTable.classList.add("col-md-12");
      }
    }
    let detailItem: HTMLElement = document.querySelector(".step4 .detail-item") as HTMLElement;
    if (detailItem != null) {
      if (detailItem.classList.contains("col-md-5")) {
        detailItem.classList.remove("col-md-5");
        detailItem.classList.add("collapse");
      }
    }


    let data = this.getDataSearch();

    this.rulewizardService.search(data)
      .subscribe(res => {
        console.log(res);
        this.results = res||[];//["content"];
        this.resultsAllData = {
          content:res,
          totalPages:res.length

        };
        this.selectStep(4);
      });
  }

  private getDataSearch() {
    let data =
      {
        activeMode: null,
        ageFrom: null,
        ageTo: null,
        discipline: null,
        gender: null,
        links: [],
        mrn: null,
        priority: null,
        patientType: null,
        patientName: null,
        // priority: this.searchModel.priority,
        reqLocation: null,
        ruleDesc: null,
        ruleName: null,
        triggerOn: null
      }
    if (this.searchModel.activeMode > -1) {
      data.activeMode = this.searchModel.activeMode == 1 ? "T" : "F";
    }
    if (this.searchModel.discipline > -1) {
      data.discipline = this.searchModel.discipline == 1 ? "H" : "C";
    }
    if (this.searchModel.gender > -1) {
      data.gender = this.searchModel.gender == 1 ? "M" : "F";
    }
    if (this.searchModel.mrn.length > 0) {
      data.mrn = this.searchModel.mrn;
    }
    if (this.searchModel.patientName.length > 0) {
      data.patientName = this.searchModel.patientName;
    }
    if (this.searchModel.patientType > -1) {
      data.patientType = this.searchModel.patientType;
    }
    if (this.searchModel.reqLocation.length > 0) {
      data.reqLocation = this.searchModel.reqLocation;
    }
    if (this.searchModel.ruleName.length > 0) {
      data.ruleName = this.searchModel.ruleName
    }
    if (this.searchModel.triggerOn > -1) {
      data.triggerOn = this.searchModel.triggerOn;
    }
    return data;
  }

  backStep() {
    this.selectStep(this.currentStep - 1);
  }

  nextStep() {
    if (this.currentStep == 3) {
      this.search();
    } else {
      this.selectStep(this.currentStep + 1);
    }
  }
  @ViewChild(Step4SearchResultComponent) step4SearchResultComponent: Step4SearchResultComponent;
  clear() {
    this.searchModel = new SearchModel();
    this.results = [];
    this.step4SearchResultComponent.curentDetail = null;

  }

  updateCart(event) {
    for (let i = 0; i < event.length; i++) {
      let newitem = event[i];
      if (!this.checkExists(newitem)) {
        this.cart.push(newitem);
      }
    }
    this.selectStep(1);
    this.clear();

  }
  checkExists(item) {
    for (let j = 0; j < this.cart.length; j++) {
      if (this.cart[j].ruleName == item.ruleName) {
        return true;
      }
    }
    return false;
  }

  showDetailCart() {
    console.log(this.cart);
    let panelDetailCart: HTMLElement = document.querySelector("#btnPanelDetailCart") as HTMLElement;
    panelDetailCart.click();
  }
  quitSearh() {
    this.router.navigate(["/dashboard"]);
  }
  //   animations: [
  //     trigger('heroState', [
  //       state('inactive', style({
  //         backgroundColor: '#eee',
  //         transform: 'scale(1)'
  //       })),
  //       state('active', style({
  //         backgroundColor: '#cfd8dc',
  //         transform: 'scale(1.1)'
  //       })),
  //       transition('inactive => active', animate('100ms ease-in')),
  //       transition('active => inactive', animate('100ms ease-out'))
  //     ])
  //   ]
}
