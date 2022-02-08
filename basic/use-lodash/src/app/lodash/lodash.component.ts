import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrls: ['./lodash.component.scss'],
})
export class LodashComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const beforeData = [{ key: 1 }, { key: 2 }];
    const afterData = [{ key: 2 }, { key: 3 }];
    console.log('删除类型：', _.differenceBy(beforeData, afterData, 'key'));
    console.log('新增类型：', _.differenceBy(afterData, beforeData, 'key'));
  }
}
