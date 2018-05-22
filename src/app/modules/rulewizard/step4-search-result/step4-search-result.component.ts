import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { User } from '../../../shared/models';
import { ToastsManager, Toast } from 'ng2-toastr';

@Component({
  selector: 'step4-search-result',
  templateUrl: './step4-search-result.component.html',
  styleUrls: ['./step4-search-result.component.css']
})
export class Step4SearchResultComponent implements OnInit {
  @Input() resultsAllData: any;
  @Input() searchResult: Array<any>;
  @Output() onUpdateCart: EventEmitter<any>;
  public cart: Array<any>;
  public curentDetail: any;
  public user: User

  constructor(public toastr: ToastsManager, public vcr: ViewContainerRef, ) {
    this.toastr.setRootViewContainerRef(vcr);

    this.searchResult = [];
    this.cart = [];
    this.onUpdateCart = new EventEmitter();

    this.user = new User();
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  changeCheckBox(event, item, index) {
    // for (let i = 0; i < this.searchResult.length; i++) {
    //   let item = this.searchResult[i];
    //   if (i == index) {
    //     if (item.selected != true) { this.curentDetail = item; }
    //     else {
    //       this.curentDetail = null;
    //     }
    //   } else {
    //     item.selected = false;
    //   }

    // }
    console.log(this.searchResult);
  }
  /**
   * clearDetailItem
   */
  public clearDetailItem() {
    this.curentDetail = null;
  }
  /**
   * showDetail
   */
  public showDetail(item) {
    this.curentDetail = item;
    let searchResultTable: HTMLElement = document.querySelector(".step4 .table-result") as HTMLElement;
    if (searchResultTable != null) {
      if (searchResultTable.classList.contains("col-md-12")) {
        searchResultTable.classList.remove("col-md-12");
        searchResultTable.classList.add("col-md-7");
      }
    }
    let detailItem: HTMLElement = document.querySelector(".step4 .detail-item") as HTMLElement;
    if (detailItem != null) {
      if (detailItem.classList.contains("collapse")) {
        detailItem.classList.remove("collapse");
        detailItem.classList.add("col-md-5");
      }
    }
  }
  /**
   * AddToCart
   */
  public AddToCart() {
    this.cart = [];
    let countSelected = 0;
    for (let i = 0; i < this.searchResult.length; i++) {
      let item = this.searchResult[i];
      if (item.selected) {
        this.cart.push(item);
        countSelected++;
      }
    }

    if (countSelected > 0) {
     
      this.toastr.success(countSelected + ' rules added');
      setTimeout(() => {
        this.onUpdateCart.emit(this.cart);
      }, 800);
  
    }
  }
}
