import { Component, OnInit } from '@angular/core';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
@Component({
  selector: 'app-dynamic-column',
  templateUrl: './dynamic-column.component.html',
  styleUrls: ['./dynamic-column.component.less'],
})
export class DynamicColumnComponent implements OnInit {
  cols = [
    {
      title: 'Name',
      width: '180px',
    },
    {
      title: 'Age',
      width: '180px',
    },
    {
      title: 'Address',
      width: '200px',
    },
    {
      title: 'Actions',
    },
  ];

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  onResize({ width }: NzResizeEvent, col: string): void {
    this.cols = this.cols.map((e) =>
      e.title === col ? { ...e, width: `${width}px` } : e
    );
  }
  ngOnInit(): void {}
}
