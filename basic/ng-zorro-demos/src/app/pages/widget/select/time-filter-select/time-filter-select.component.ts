import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-time-filter-select',
  templateUrl: './time-filter-select.component.html',
  styleUrls: ['./time-filter-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimeFilterSelectComponent),
      multi: true,
    },
  ],
})
export class TimeFilterSelectComponent implements OnInit, ControlValueAccessor {
  delegate!: ControlValueAccessor;

  selectedKey = 'none';
  selectedSort = '';
  sortArr = ['', 'asc', 'desc'];
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
  onlySortChange=false


  constructor() {}

  ngOnInit(): void {}

  onChange() {
    if(this.onlySortChange){
      this.onlySortChange=false
      return
    }
    this.selectedSort = 'asc';
    this.inputChange()
  }

  onClick(val) {
    this.selectedSort = val;
    this.inputChange()
    this.onlySortChange=true
  }

  inputChange(){
    this.propagateOnChange({
      sortField: this.selectedKey,
      sortOrder: this.selectedSort,
    });
  }


  /**
   * ControlValueAccessor Start
   */

  writeValue(value) {
    if (value!==this.selectedKey) {
      this.selectedKey = 'none';
      this.selectedSort = '';
    }
  }
  propagateOnChange: (value: any) => void = (_: any) => {};
  propagateOnTouched: (value: any) => void = (_: any) => {};
  registerOnChange(fn: any) {
    this.propagateOnChange = fn;
  }
  registerOnTouched(fn: any) {
    this.propagateOnTouched = fn;
  }
  /**
   * ControlValueAccessor End
   */
}
