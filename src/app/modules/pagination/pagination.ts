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
    private pageSizes: number[] = [5, 10, 20, 25, 50, 100];
    constructor(private showLogService: ShowLogsService) {
        // this.pager = this.data.getPager(100, 1, 10);
    }
    // // pager object
    ngOnInit() {
    }

    gotoPage(page: number) {
        if (page < 1 || page > this.pager.totalPages || page == this.pager.currentPage) return;
        this.onChangePage.emit({ pageIndex: page, pageSize: this.pager.pageSize });
    }
    ChangePageSize() {
        // this.gotoPage(1);
    }
    public rerender(pager) {
        this.pager = this.showLogService.getPager(pager.totalItems, pager.pageIndex, pager.pageSize);
    }

}
