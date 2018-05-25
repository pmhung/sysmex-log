import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ShowLogsService } from '../show-logs/show-logs.service';
@Component({
    selector: 'pagination',
    templateUrl: 'pagination.html',
    styleUrls: ['./pagination.css']
})
export class PaginationComponent {
    @Input() pager: any;
    @Input() showPageSize: boolean = false;
    @Input() showTotal: boolean = false;
    @Output() onChangePage = new EventEmitter<any>();
    public bindingArray: Array<any>;
    public startItem: number;
    public endItem: number;
    private pageSizes: number[] = [5, 10, 20, 25, 50, 100];
    constructor(private showLogService: ShowLogsService) {
        // this.pager = this.data.getPager(100, 1, 10);
        this.bindingArray = new Array<any>();
        this.startItem = 0;
        this.endItem = 5;
    }
    // // pager object
    ngOnInit() {
    }

    gotoPage(page: number) {
        if (page < 1 || page > this.pager.totalPages || page == this.pager.currentPage) return;
        var indexOfPage = this.pager.pages.indexOf(page);
        this.startItem  = Math.floor(indexOfPage/5)*5;
        this.endItem = this.startItem + 5;

        this.onChangePage.emit({ pageIndex: page, pageSize: this.pager.pageSize });
    }
    ChangePageSize() {
        // this.gotoPage(1);
    }
    public rerender(pager) {
        this.pager = this.showLogService.getPager(pager.totalItems, pager.pageIndex, pager.pageSize);
    }

    // bindingFivePage(){
    //     var indexOfPage = this.pager.pages.indexOf(page);
    //     var arrPart  = Math.floor((indexOfPage + 1)/5);
    //     this.bindingArray = this.pager.pages.slice(arrPart, arrPart+5);
    //     console.log();
    // }

}
