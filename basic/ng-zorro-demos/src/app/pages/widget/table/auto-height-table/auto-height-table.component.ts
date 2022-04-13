import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  HostListener,
} from '@angular/core';
@Component({
  selector: 'app-auto-height-table',
  templateUrl: './auto-height-table.component.html',
  styleUrls: ['./auto-height-table.component.scss'],
})
export class AutoHeightTableComponent implements OnInit, AfterViewInit {
  @ViewChild('tableView') tableView;
  tableTable: any[] = [];
  isLoading = false;
  tableHeight = 0;

  // table params
  pageSize = 10;
  pageIndex = 1;
  total = 0;
  keywords = '';
  sortField = null;
  sortOrder = null;

  constructor() {}

  ngOnInit(): void {
    // this.fetchList();
  }

  getParams() {
    const params = {
      page: this.pageIndex,
      pageSize: this.pageSize,
      keywords: this.keywords,
      orderfield: this.sortField,
      orderdirection:
        this.sortOrder === 'ascend'
          ? 'asc'
          : this.sortOrder === 'descend'
          ? 'desc'
          : null,
    };

    return params;
  }

  fetchList() {
    this.isLoading = true;
    setTimeout(() => {
      this.tableTable = [];
      for (let i = 0; i < 10; i++) {
        this.tableTable.push({
          name: `Edward King ${i}`,
          age: 32,
          address: `London`,
        });
      }
      this.total = 132;
      this.isLoading = false;
    }, 1000);
  }

  onQueryParamsChange(params) {
    console.log('筛选参数', params);
    const { pageIndex, pageSize, sort } = params;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    const currentSort = sort.find((item) => item.value !== null);
    this.sortField = (currentSort && currentSort.key) || null;
    this.sortOrder = (currentSort && currentSort.value) || null;
    this.fetchList();
  }

  onKeyUp(e) {
    this.fetchList();
  }

  onSearch() {
    this.fetchList();
  }

  onReset() {
    this.keywords = '';
    this.pageIndex = 1;
    this.pageSize = 10;
    this.total = 0;
    this.sortField = null;
    this.sortOrder = null;
    this.fetchList();
  }

  ngAfterViewInit(): void {
    this.autoSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.autoSize();
  }

  autoSize() {
    setTimeout(() => {
      this.tableHeight = this.tableView.nativeElement.clientHeight - 55 - 48;
      console.log(this.tableHeight);
    }, 10);
  }
}
