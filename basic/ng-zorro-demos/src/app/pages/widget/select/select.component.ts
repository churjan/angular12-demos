import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  selectedKey = 'none';
  selectedSort = ''
  sortArr=['','asc','desc']
  timeList = [
    {
      label: '手动',
      value: 'none',
    },
    {
      label: '按预计开始时间',
      value: 'ptl_startdate',
    },
    {
      label: '按预计结束时间',
      value: 'ptl_enddate',
    },
    {
      label: '按创建时间',
      value: 'createtime',
    },
    {
      label: '按更新时间',
      value: 'updatetime',
    },
    {
      label: '按实际开始时间',
      value: 'ptl_realstartdate',
    },
    {
      label: '按实际结束时间',
      value: 'ptl_realenddate',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onChange(e:any){
    this.selectedSort='asc'
  }


  onClick(val:any){
    this.selectedSort=val
  }
}
