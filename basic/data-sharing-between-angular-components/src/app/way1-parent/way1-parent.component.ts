import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way1-parent',
  templateUrl: './way1-parent.component.html',
  styleUrls: ['./way1-parent.component.scss'],
})
export class Way1ParentComponent implements OnInit {
  public parentData = 'Hello Child!';
  public childData = '';

  constructor() {}

  ngOnInit(): void {}
}
