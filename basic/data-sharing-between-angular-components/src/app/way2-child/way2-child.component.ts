import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way2-child',
  templateUrl: './way2-child.component.html',
  styleUrls: ['./way2-child.component.scss'],
})
export class Way2ChildComponent implements OnInit {
  message = 'Hello Parent!';

  constructor() {}

  ngOnInit(): void {}
}
