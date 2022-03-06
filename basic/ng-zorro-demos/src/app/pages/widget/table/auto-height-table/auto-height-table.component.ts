import { Component, OnInit, AfterViewInit, ViewChild,HostListener } from '@angular/core';
@Component({
  selector: 'app-auto-height-table',
  templateUrl: './auto-height-table.component.html',
  styleUrls: ['./auto-height-table.component.scss'],
})
export class AutoHeightTableComponent implements OnInit {
  @ViewChild('tableView') tableView;
  listOfData = [];
  tableHeight = 0;

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfData.push({
        name: `Edward King ${i}`,
        age: 32,
        address: `London`,
      });
    }
  }

  ngAfterViewInit(): void {
    this.autoSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.autoSize();
  }

  autoSize(){
    setTimeout(() => {
      this.tableHeight = this.tableView.nativeElement.clientHeight - 55 - 64;
      console.log(this.tableHeight);
    }, 10);
  }

}
