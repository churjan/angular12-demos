import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.scss'],
})
export class Sibling2Component implements OnInit {
  count: number = 0;

  constructor(private sharedService: SharedService) {
    this.sharedService.getClickEvent().subscribe(() => {
      this.incrementCount();
    });
  }

  ngOnInit(): void {}

  incrementCount() {
    this.count++;
  }
}
