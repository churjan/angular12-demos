import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Way2ChildComponent } from '../way2-child/way2-child.component';

@Component({
  selector: 'app-way2-parent',
  templateUrl: './way2-parent.component.html',
  styleUrls: ['./way2-parent.component.scss'],
})
export class Way2ParentComponent implements AfterViewInit {
  @ViewChild(Way2ChildComponent) child!: Way2ChildComponent;
  message!: string;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.message = this.child.message;
    });
  }
}
