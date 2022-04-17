import { Component, OnInit, ViewChild } from '@angular/core';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @ViewChild('tree') tree;

  constructor() {}

  ngOnInit(): void {}

  searchValue = '';

  nodes = [
    {
      title: '0-0',
      key: '0-0',
      selectable: false,
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          selectable: false,
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          selectable: false,
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true,
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      selectable: false,
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true,
    },
  ];

  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
    if (event.eventName === 'click') {
      const key = event.node.key;
      console.log(key);
      event.node.isExpanded = !event.node.isExpanded;
    }
  }
}
