import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  selectedKey = 'none';
  prevSelectedKey='none'
  selectedSort = ''
  sortArr=['','asc','desc']
  timeList = [
    {
      label: '手动排序',
      value: 'none',
    },
    {
      label: '按预计开始时间排序',
      value: 'ptl_startdate',
    },
    {
      label: '按预计结束时间排序',
      value: 'ptl_enddate',
    },
    {
      label: '按创建时间排序',
      value: 'createtime',
    },
    {
      label: '按更新时间排序',
      value: 'updatetime',
    },
    {
      label: '按实际开始时间排序',
      value: 'ptl_realstartdate',
    },
    {
      label: '按实际结束时间排序',
      value: 'ptl_realenddate',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onChange(e:any){
    this.prevSelectedKey=e
  }


  onOptionClick(e:any,data:any){
    if(e.target.tagName==='SPAN'){
      if(data.value===this.prevSelectedKey){
        const idx=this.sortArr.findIndex(item=>item===this.selectedSort)
        this.selectedSort= this.sortArr[(idx+1)%3]
      }else{
        this.selectedSort='asc'
      }
    }
  }

  onClick(val:any){
    this.selectedSort=val
  }
}
