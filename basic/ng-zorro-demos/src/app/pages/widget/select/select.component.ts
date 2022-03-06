import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  sortField = null;
  sortOrder = null;

  constructor() {}

  ngOnInit(): void {}

  onChange(e) {
    console.log(e);
    this.sortField = e.sortField;
    this.sortOrder = e.sortOrder;
  }
}
